import { NextFunction, Request, Response } from "express";
import { Contact, ContactModel, ContactValidationSchema , ContactDoc} from "../models"; 

class ContactController { 
    model: Contact;
    constructor() {        
        this.model = new Contact(ContactModel);
        this.getContactsSubmissions = this.getContactsSubmissions.bind(this);
        this.getContactSubmission = this.getContactSubmission.bind(this);
        this.createContactSubmission = this.createContactSubmission.bind(this);
        this.updateContactSubmission = this.updateContactSubmission.bind(this);
        this.deleteContactSubmission = this.deleteContactSubmission.bind(this);
    }
    
    async getContactSubmission(req: Request, res: Response) {
        try {
            const contactSubmission:ContactDoc|null = await this.model.findOne({});            
            res.status(200).json({ contactSubmission });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async getContactsSubmissions(req: Request, res: Response) {
        try {
            const contactSubmissions:ContactDoc[] = await this.model.findAll({});
            res.status(200).json({ contactSubmissions });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    

    async createContactSubmission(req: Request, res: Response) {                      
        try {
            await this.validateContactSubmissionData(req, res, async () => {                    
                const contactSubmission:ContactDoc = await this.model.create(req.body.value);
                res.status(200).json({ contactSubmission });
            });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async updateContactSubmission(req: Request, res: Response) {                
        try {
            await this.validateContactSubmissionData(req, res, async () => {
                const {id} = req.params;
                const result = await this.model.updateOne(id, req.body.value);
                res.status(200).json({ message: "contact submission updated successfully" });
            });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async deleteContactSubmission(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await this.model.deleteOne(id);            

            res.status(200).json({ message: "Contact submission deleted successfully" });
        } catch (error) {
            res.status(500).json({ error });
        }
    }    

    async validateContactSubmissionData(req: Request, res: Response, next: NextFunction) {                 
        const {error, value} = ContactValidationSchema.validate(req.body as ContactDoc);

        if (error) {
            console.error(error);
            return res.status(400).json({ error: "Invalid contact submission data" });
        }      
        
        req.body.value = value;
        next();
    }

}

export const contactController = new ContactController();