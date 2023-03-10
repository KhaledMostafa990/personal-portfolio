import Joi from 'joi';
import mongoose, { Schema, Document, Model } from 'mongoose';
import { ModelsTemplate } from './ModelsTemplate';

// Main Info Schema 
const ProjectSchema: Schema = new Schema({        
    name: { type: String, required: true },
    description: { type: String, required: true },
    mainImageUrl: { type: String, required: true },
    heroImageUrl: { type: String, required: true },
    showcaseImagesUrls: { type: [String], required: true },
    'about-project': { type: String, required: true },
    'project-demo-url': { type: String, required: true },
    'built-with': { type: [String], required: true }
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
export const ProjectValidationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    mainImageUrl: Joi.string().uri(),
    heroImageUrl: Joi.string().uri(),
    showcaseImagesUrls: Joi.array().items(Joi.string().uri()),
    'about-project': Joi.string().required(),
    'project-demo-url': Joi.string().required(),
    'built-with': Joi.array().items(Joi.string()).required(),
});

// Main Info interface 
export interface ProjectDoc extends Document {    
    id: string;
    name: string;
    description: string;
    mainImageUrl: string;
    heroImageUrl: string;
    showcaseImagesUrls: string[];
    'about-project': string;
    'project-demo-url': string;
    'built-with': string[];
}    

export const ProjectModel = mongoose.model<ProjectDoc>('Project', ProjectSchema);

export class Project extends ModelsTemplate {
protected model: Model<ProjectDoc>;

  constructor(model: Model<ProjectDoc>) {
    super(model);
    this.model = model;
  }  
}