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
                const projectCount = await this.model.countDocuments();
                let currentProject;

                console.log(projectCount)
                if (projectCount === 0) {                    
                    currentProject = await this.model.create(req.body.value);
                    currentProject.nextProject = {id:currentProject.id, name:currentProject.name};
                    currentProject.previousProject = {id:currentProject.id, name:currentProject.name};                    
                } else if (projectCount === 1) {
                    let firstProject = await this.model.findOne({}).sort({createdAt: 1});
                    currentProject = await this.model.create(req.body.value);
                    
                    if(firstProject !== null) {
                        currentProject.nextProject= { id:firstProject.id, name:firstProject.name }
                        currentProject.previousProject= { id:firstProject.id, name:firstProject.name }
                        
                        firstProject.nextProject= { id: currentProject.id, name: currentProject.name }
                        firstProject.previousProject= { id: currentProject.id, name: currentProject.name }
                        
                        console.log(firstProject);
                        await firstProject.save();                        
                    }
                } else {
                    const firstProject = await this.model.findOne({}).sort({createdAt: 1});
                    const lastProject = await this.model.findOne({}).sort({createdAt: -1});
                    currentProject = await this.model.create(req.body.value);

                    if(lastProject && firstProject) {
                        currentProject.nextProject = {id:firstProject.id, name:firstProject.name}       
                        currentProject.previousProject = {id:lastProject.id, name:lastProject.name}       

                        lastProject.nextProject = {id:currentProject.id, name:currentProject.name}                        
                        firstProject.previousProject ={id:currentProject.id, name:currentProject.name}   
                        
                        console.log("first:",firstProject , "last:", lastProject);
                        await firstProject.save();
                        await lastProject.save();
                    }
                }
                
                console.log("current:",currentProject);
                await currentProject.save();
                res.status(200).json({ currentProject });
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
        { name: 'mainImageUrls', maxCount: 6 },
        { name: 'heroImageUrls', maxCount: 6 },
        { name: 'showcaseImagesUrls', maxCount: 8}                                        
    ])(req, res, async (err: any) => {
        if (err) {
            console.error(err);
            return res.status(400).json({ error: "Failed to upload images" });
        }
        
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
            mainImageUrls,
            heroImageUrls,
            showcaseImagesUrls
        }:any = req.files;

        value.mainImageUrls = mainImageUrls.map((file: Express.Multer.File) => file.filename);
        value.heroImageUrls = heroImageUrls.map((file: Express.Multer.File) => file.filename);
        value.showcaseImagesUrls = showcaseImagesUrls.map((file: Express.Multer.File) => file.filename);

        req.body.value = value;
        next();
    });
}

}

export const projectController = new ProjectController();