import Joi from 'joi';
import mongoose, { Schema, Document, Model } from 'mongoose';
import { ModelsTemplate } from './ModelsTemplate';

// Main Info Schema 
const ContactSchema: Schema = new Schema({        
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },    
},
{
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;        
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;    
      },
    },
    timestamps: true,
  });

// Main Info Validation schema
export const ContactValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    message: Joi.string().required(),
});

// Main Info interface 
export interface ContactDoc extends Document {    
    name: string;
    email: string;
    message: string;
}    

export const ContactModel = mongoose.model<ContactDoc>('contact', ContactSchema);

export class Contact extends ModelsTemplate<ContactDoc> {
protected model: Model<ContactDoc>;

  constructor(model: Model<ContactDoc>) {
    super(model);
    this.model = model;
  }  
}