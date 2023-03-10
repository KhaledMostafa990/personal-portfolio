import { NextFunction, Request, Response } from "express";
import expressApp from "../expressApp";
import { uploadProjectImages } from "../middleware/storage";
import { Project, ProjectModel, ProjectValidationSchema , ProjectDoc} from "../models"; 

class ProjectController { 
    model: Project;
    constructor() {        
        this.model = new Project(ProjectModel);
        this.getProjects = this.getProjects.bind(this);
        this.getProject = this.getProject.bind(this);
        this.createProject = this.createProject.bind(this);
        this.updateProject = this.updateProject.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }

    private validateProject(project: any) {
        return ProjectValidationSchema.validate(project);        
    }

    async getProject(req: Request, res: Response) {
        try {
            const project = await this.model.findOne({});            
            res.status(200).json({ project });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async getProjects(req: Request, res: Response) {
        try {
            const projects = await this.model.findAll({});
            res.status(200).json({ projects });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    

    async createProject(req: Request, res: Response) {                      
        try {
            await this.uploadProjectFiles(req, res, async () => {                    
                const project = await this.model.create(req.body.value);
                res.status(200).json({ project });
            });

        }
        catch (error) {
            res.status(500).json({ error });
        }
    }

    async updateProject(req: Request, res: Response) {                
        // Todo: update replace the new images with the old ones on file system
        try {
            await this.uploadProjectFiles(req, res, async () => {
            const {id} = req.params
            const result = await this.model.updateOne(id, req.body.value);
            res.status(200).json({ message: "project updated successfully" });
        });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async deleteProject(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await this.model.deleteOne(id);            
            console.log(result);
            res.status(200).json({ message: "Project deleted successfully" });
        } catch (error) {
            res.status(500).json({ error });
        }
    }    

    async uploadProjectFiles(req: Request, res: Response, next: NextFunction) {
    uploadProjectImages.fields([
        { name: 'main-image-url', maxCount: 1 },
        { name: 'hero-image-url', maxCount: 1 },
        { name: 'showcase-images-urls', maxCount: 3}                                        
    ])(req, res, async (err: any) => {
        if (err) {
            console.error(err);
            return res.status(400).json({ error: "Failed to upload images" });
        }

        req.body['built-with'] = req.body['built-with'].split(',');

        const {error, value} = this.validateProject(req.body as ProjectDoc);

        if (error) {
            console.error(error);
            return res.status(400).json({ error: "Invalid project data" });
        }

        if (!req.files) {
            console.error("No files were uploaded");
            return res.status(400).json({ error: "No files were uploaded" });
        }

        const { 
            'main-image-url':mainImageUrl,
             'hero-image-url':heroImageUrl,
             'showcase-images-urls': showcaseImagesUrls 
        }:any = req.files;

        value.mainImageUrl = mainImageUrl[0].path;
        value.heroImageUrl = heroImageUrl[0].path;
        value.showcaseImagesUrls = showcaseImagesUrls.map((file: Express.Multer.File) => file.path);

        req.body.value = value;
        next();
    });
}

}

export const projectController = new ProjectController();