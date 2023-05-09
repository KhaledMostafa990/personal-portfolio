import Joi from 'joi';
import mongoose, { Schema, Document, Model } from 'mongoose';
import { ModelsTemplate } from './ModelsTemplate';

// Main Info Schema 
const ProjectSchema: Schema = new Schema({        
    name: { type: String, required: true },
    description: { type: String, required: true },
    mainImageUrls: { type: [String], required: true },
    heroImageUrls: { type: [String], required: true },
    showcaseImagesUrls: { type: [String], required: true },
    aboutProject: { type: String, required: true },
    demo: { type: String, required: true },
    type:{type: [String], required: true},
    technologies: { type: [String], required: true },
    nextProject: {
      id: {
        type: String
      },
      name: {
        type: String
      }
    },
    previousProject:{
      id: {
        type: String
      },
      name: {
        type: String
      }
    },
},
{
    toJSON: {
      transform(doc, ret: any) {
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
    mainImageUrls: Joi.array().items(Joi.string().uri()),
    heroImageUrls: Joi.array().items(Joi.string().uri()),
    showcaseImagesUrls: Joi.array().items(Joi.string().uri()),
    aboutProject: Joi.string().required(),
    demo: Joi.string().required(),
    type: Joi.array().items(Joi.string()).required(),
    technologies: Joi.array().items(Joi.string()).required(),
    nextProject: Joi.object().keys({
      id: Joi.string(),
      name: Joi.string(),
    }),
    previousProject: Joi.object().keys({
      id: Joi.string(),
      name: Joi.string(),
    }),
});

interface AdjacentProject {
  id: any;
  name: string;
}

// Main Info interface 
export interface ProjectDoc extends Document {    
    id: string;
    name: string;
    description: string;
    mainImageUrls: string[];
    heroImageUrls: string[];
    showcaseImagesUrls: string[];
    aboutProject: string;
    demo: string;
    type: string[];
    technologies: string[];
    nextProject?: AdjacentProject;
    previousProject?:AdjacentProject;
}    

export const ProjectModel = mongoose.model<ProjectDoc>('Project', ProjectSchema);

export class Project extends ModelsTemplate<ProjectDoc> {
protected model: Model<ProjectDoc>;

  constructor(model: Model<ProjectDoc>) {
    super(model);
    this.model = model;
  }  
}