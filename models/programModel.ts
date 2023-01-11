import mongoose from 'mongoose';
import Internship from '../types/Internship';
import { TimelineSchema } from './timelineSchema';
import { CompanySchema } from './companySchema';

export interface IProgram extends Internship, mongoose.Document {}

export const ProgramSchema: mongoose.Schema = new mongoose.Schema({
  programName: String,
  ownerOfProgram: { type: [CompanySchema], required: true },
  timeline: { type: [TimelineSchema], required: true },
  programPicture: { type: [String], require: true },
  programWebsite: String,
  favoriteStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  relatedField: [String],
  programType: String,
  paid: Boolean,
});

class ProgramModel {
  private static instance: ProgramModel;
  public model: mongoose.Model<IProgram>;

  constructor() {
    this.model = mongoose.model<IProgram>('Program', ProgramSchema);
  }

  static getInstance(): ProgramModel {
    if (!ProgramModel.instance) {
      ProgramModel.instance = new ProgramModel();
    }
    return ProgramModel.instance;
  }
}

export default ProgramModel;
