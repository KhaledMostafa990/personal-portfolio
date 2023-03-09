import { Request, Response } from "express";
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

    async getMainInfo(req: Request, res: Response) {
        try {
            const mainInfo = await this.model.findOne({});            
            res.status(200).json({ mainInfo });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async createMainInfo(req: Request, res: Response) {   
        // Todo: the body comes empty when send data using postman form (must be fixed)
        console.log(req.body, "hi")
        try {
            const {error, value} = this.validateMainInfo(req.body);
            if (error) return res.status(400).json({ error });       
            
            uploadMainImages.fields([
                { name: 'heroImage', maxCount: 1 },
                { name: 'personalImage', maxCount: 1 },                                
            ])(req, res, async (err: any) => {
                if (err) return res.status(400).json({ error: err.message });
                if (!req.files) return res.status(400).json({ error: "No files were uploaded" });                
                const { heroImage, personalImage }:any = req.files;
                value.heroImage = heroImage[0].path;
                value.personalImage = personalImage[0].path;
            });
            
            const mainInfo = await this.model.create(value);
            res.status(200).json({ mainInfo });

        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async updateMainInfo(req: Request, res: Response) {
        
        try {
            const {error, value} = this.validateMainInfo(req.body);

            if (error) return res.status(400).json({ error });            

            // TODO: the following id should be founded based on auth token not a params
            const { id } = req.params; 
            const mainInfo = await this.model.updateOne(id, req.body);            
            console.log(id)
            res.status(200).json({ message: "Main info updated successfully" });
        } catch (error) {
            res.status(500).json({ error });
        }        
    }

    validateMainInfo(mainInfo: any) {
        return MainInfoValidationSchema.validate(mainInfo);        
    }
}

export const mainInfoController = new MainInfoController();