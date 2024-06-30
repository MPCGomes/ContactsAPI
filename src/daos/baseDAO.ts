import { Model, Document } from "mongoose";
import logger from "../utils/logger";

export class BaseDAO<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(doc: T): Promise<T> {
    try {
      return await this.model.create(doc);
    } catch (error) {
      logger.error("Error creating document", error);
      throw error;
    }
  }

  async findAll(): Promise<T[]> {
    try {
      return await this.model.find();
    } catch (error) {
      logger.error("Error finding documents", error);
      throw error;
    }
  }

  async findById(id: string): Promise<T | null> {
    try {
      return await this.model.findById(id);
    } catch (error) {
      logger.error(`Error finding document by ID: ${id}`, error);
      throw error;
    }
  }

  async updateById(id: string, doc: Partial<T>): Promise<T | null> {
    try {
      return await this.model.findByIdAndUpdate(id, doc, { new: true });
    } catch (error) {
      logger.error(`Error updating document by ID: ${id}`, error);
      throw error;
    }
  }

  async deleteById(id: string): Promise<T | null> {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      logger.error(`Error deleting document by ID: ${id}`, error);
      throw error;
    }
  }
}
