import { Document, ProjectionType , FilterQuery, Model } from 'mongoose';

export abstract class ModelsTemplate<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: any) {
    return await this.model.create(data);
  }

  findOne(queries: FilterQuery<T>, projection?: ProjectionType<T>)  {
     return this.model.findOne(queries, projection);    
  }

  async updateOne(id: string, data: any) {
    return await this.model.updateOne({ _id: id }, data);
  }

  async deleteOne(id: string) {
    return await this.model.deleteOne({ _id: id });
  }

  async findAll(queries: {}) {
    return await this.model.find({ ...queries });
  }

  async countDocuments () {
    return await this.model.countDocuments();
  }
}
