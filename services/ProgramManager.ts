import Program from '../types/Program';
import Internship from '../types/Internship';
import ProgramModel, { IProgram } from '../models/programModel';
import UserModel, { IUserDocument } from '../models/userModel';
import Company from '../types/Company';

const userModel = UserModel.getInstance();
const programModel = ProgramModel.getInstance();

class ProgramManager {
  public parseProgram(documentProgram: IProgram | null): Internship | null {
    if (documentProgram === null) return null;

    const {
      _id,
      programName,
      ownerOfProgram,
      timeline,
      programPicture,
      programWebsite,
      favoriteStudents,
      relatedField,
      programType,
      paid,
    } = documentProgram;

    switch (programType) {
      case 'INTERN': {
        const internship = new Internship(
          _id.toString(),
          programName,
          ownerOfProgram,
          timeline,
          programPicture,
          programWebsite,
          favoriteStudents,
          relatedField,
          programType,
          paid
        );
        return internship;
      }
      default: {
        return null;
      }
    }
  }

  public async getAllPrograms(): Promise<Internship[]> {
    const programsDoc = await programModel.model.find();
    const programs = programsDoc.map((program) => {
      return this.parseProgram(program);
    });
    return programs as Internship[];
  }

  public async getProgramId(id: string): Promise<Program | null> {
    const program = await programModel.model.findById(id);
    return this.parseProgram(program);
  }

  public async getManyProgram(ids: String[] | null): Promise<any[] | null> {
    if (ids?.length === 0) return null;

    const programsDoc = await programModel.model.find({ _id: { $in: ids } });
    const programs = programsDoc.map((program) => {
      return this.parseProgram(program);
    });
    return programs;
  }

  public async create(program: Internship): Promise<IProgram> {
    return await programModel.model.create(program);
  }

  private async parseProgramDocument(
    program: Program
  ): Promise<IProgram | null> {
    const programDocument: IProgram | null = await programModel.model.findById(
      program.programId
    );

    if (programDocument === null) return null;

    const { programType } = programDocument;

    switch (programType) {
      case 'INTERN': {
        const internship = program as Internship;
        programDocument.programName = internship.programName;
        programDocument.timeline = internship.timeline;
        programDocument.programPicture = internship.programPicture;
        programDocument.programWebsite = internship.programWebsite;
        programDocument.favoriteStudents = internship.favoriteStudents;
        programDocument.relatedField = internship.relatedField;
        programDocument.programType = internship.programType;
        programDocument.paid = internship.paid;
        return programDocument;
      }
      default: {
        return null;
      }
    }
  }

  public async issuedPrograms(company: Company): Promise<any> {
    const user: IUserDocument | null = await userModel.model
      .findById(company.userId)
      .populate('issuedProgram');
    return user?.issuedProgram;
  }

  public async save(program: Program): Promise<void> {
    const documentProgram = await this.parseProgramDocument(program);
    documentProgram?.save();
  }
}

export default ProgramManager;
