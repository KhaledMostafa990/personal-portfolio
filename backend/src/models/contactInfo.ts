import Joi from 'joi';
import mongoose, { Schema, Document, Model } from 'mongoose';
import { ModelsTemplate } from './ModelsTemplate';

// Main Info Schema 
const ContactInfoSchema: Schema = new Schema({        
   heading: { type: String, required: true },
   description: { type: String, required: true },
   contactFormInputs: {
    type : [
      {
        name: { type: String, required: true },
        label: { type: String, required: true },
        type: { type: String, required: true },   
        placeholder: { type: String, required: true },   
        required: { type: Boolean, required: true },   
      }
    ]
   }, 
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
export const ContactInfoValidationSchema = Joi.object({
    heading: Joi.string().required(),
    description: Joi.string().required(),
    contactFormInputs: Joi.array().items(
      Joi.object().keys({
        name: Joi.string().required(),
        label: Joi.string().required(),
        type: Joi.string().required(),
        placeholder: Joi.string().required(),
        required: Joi.boolean().required(),
      })
    ),
});

// Main Info interface 
export interface ContactInfoDoc extends Document {    
   heading: string;
    description: string;
    contactFormInputs: {
      name: string;
      label: string;
      type: string;
      placeholder: string;
      required: boolean;
    }[]
}    

export const ContactInfoModel = mongoose.model<ContactInfoDoc>('contactInfo', ContactInfoSchema);

export class ContactInfo extends ModelsTemplate<ContactInfoDoc> {
protected model: Model<ContactInfoDoc>;

  constructor(model: Model<ContactInfoDoc>) {
    super(model);
    this.model = model;
  }  
}