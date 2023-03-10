import { NextFunction, Request, Response } from "express";
import { uploadMainImages } from "../middleware/storage";
import { MainInfo, MainInfoModel, MainInfoValidationSchema } from "../models"; 

class MainInfoController {
    model: MainInfo;
    constructor() {        
        this.model = new MainInfo(MainInfoModel);
        this.getMainInfo = this.getMainInfo.bind(this);
        this.createMainInfo = this.createMainInfo.bind(this);
        this.updateMainInfo = this.updateMainInfo.bind(this);
    }

    private validateMainInfo(mainInfo: any) {
        return MainInfoValidationSchema.validate(mainInfo);        
    }

    async getMainInfo(req: Request, res: Response) {
        try {
            const mainInfo = await this.model.findOne({});            
            res.status(200).json({ mainInfo });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async createMainInfo(req: Request, res: Response) {          
        try {
            await this.uploadMainFiles(req, res, async () => {
                const mainInfo = await this.model.create(req.body.value);            
                res.status(200).json({ mainInfo });
            });
        } catch (error) {
            res.status(500).json({ error });
        }
       
    }

    async updateMainInfo(req: Request, res: Response) {        
        // Todo: update replace the new images with the old ones on file system
        try {
            await this.uploadMainFiles(req, res, async () => {
                const { id } = req.params; 
                const mainInfo = await this.model.updateOne(id, req.body.value);                        
                res.status(200).json({ message: "Main info updated successfully" });
            });
        } catch (error) {
            res.status(500).json({ error });
        }        
    }

    async uploadMainFiles(req: Request, res: Response, next: NextFunction) {
         uploadMainImages.fields([
            { name: 'hero-image', maxCount: 1 },
            { name: 'personal-image', maxCount: 1 },                                
        ])(req, res, async (err: any) => {
            
            if (err) return res.status(400).json({ error: err.message });
            
            const {error, value} = this.validateMainInfo(req.body);
            
            if (error) return res.status(400).json({ error });       
            

            if (!req.files) return res.status(400).json({ error: "No files were uploaded" });       

            const { "hero-image":heroImage, "personal-image":personalImage }:any = req.files;

            value.heroImage = heroImage[0].path;
            value.personalImage = personalImage[0].path;

            req.body.value = value;
            next();
        });
    }
}

export const mainInfoController = new MainInfoController();