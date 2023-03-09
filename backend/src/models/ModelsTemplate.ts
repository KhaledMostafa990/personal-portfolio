import { Model } from 'mongoose';

export abstract class ModelsTemplate {
  protected model: Model<any>;

  constructor(model: Model<any>) {
    this.model = model;
  }

  async create(data: any) {
    return await this.model.create(data);
  }

  async findOne(queries: {}) {
    return await this.model.findOne({ ...queries });
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
}
