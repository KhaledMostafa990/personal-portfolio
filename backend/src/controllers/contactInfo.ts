import { NextFunction, Request, Response } from "express";
import { ContactInfo, ContactInfoModel, ContactInfoValidationSchema , ContactInfoDoc} from "../models"; 

class ContactInfoController { 
    model: ContactInfo;
    constructor() {        
        this.model = new ContactInfo(ContactInfoModel);        
        this.getContactInfo = this.getContactInfo.bind(this);
        this.createContactInfo = this.createContactInfo.bind(this);
        this.updateContactInfo = this.updateContactInfo.bind(this);
        this.deleteContactInfo = this.deleteContactInfo.bind(this);
    }
    
    async getContactInfo(req: Request, res: Response) {
        try {
            const contactInfo: ContactInfoDoc | null = await this.model.findOne({});            
            res.status(200).json({ contactInfo });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async createContactInfo(req: Request, res: Response) {                      
        try {
            await this.validateContactInfoData(req, res, async () => {                    
                const contactInfo:ContactInfoDoc = await this.model.create(req.body.value);
                res.status(200).json({ contactInfo });
            });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async updateContactInfo(req: Request, res: Response) {                
        try {
            await this.validateContactInfoData(req, res, async () => {
                const {id} = req.params;
                const result = await this.model.updateOne(id, req.body.value);
                res.status(200).json({ message: "Contact info  updated successfully" });
            });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async deleteContactInfo(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await this.model.deleteOne(id);            

            res.status(200).json({ message: "Contact info  deleted successfully" });
        } catch (error) {
            res.status(500).json({ error });
        }
    }    

    async validateContactInfoData(req: Request, res: Response, next: NextFunction) {                 
        const {error, value} = ContactInfoValidationSchema.validate(req.body as ContactInfoDoc);

        if (error) {
            console.error(error);
            return res.status(400).json({ error: "Invalid contact info  data" });
        }      
        
        req.body.value = value;
        next();
    }

}

export const contactInfoController = new ContactInfoController();