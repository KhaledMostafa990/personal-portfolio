import Joi from 'joi';
import mongoose, { Schema, Document, Model } from 'mongoose';
import { ModelsTemplate } from './ModelsTemplate';

// Main Info Schema
const MainInfoSchema: Schema = new Schema({        
    name: { type: String, required: true },
    'hero-title': { type: String, required: true },
    heroImage: { type: String, required: true },
    personalImage: { type: String, required: true },
    aboutMe: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    address: { type: String }
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
export const MainInfoValidationSchema = Joi.object({
    name: Joi.string().required(),
    'hero-title': Joi.string().required(),
    heroImage: Joi.string().uri(),
    personalImage: Joi.string().uri(),
    aboutMe: Joi.string().required(),
    email: Joi.string(),
    phone: Joi.string(),
    address: Joi.string()
});

// Main Info interface 
export interface MainInfoDoc extends Document {    
    id: string;
    name: string;
    'hero-title': string;
    heroImage: string;
    personalImage: string;
    aboutMe: string;
    email?: string;
    phone?: string;
    address?: string;    
}    

export const MainInfoModel = mongoose.model<MainInfoDoc>('MainInfo', MainInfoSchema);

export class MainInfo extends ModelsTemplate {
protected model: Model<MainInfoDoc>;

  constructor(model: Model<MainInfoDoc>) {
    super(model);
    this.model = model;
  }  
}