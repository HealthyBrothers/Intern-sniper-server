import Program from "../types/Program";
import Internship from "../types/Internship";
import ProgramModel from "../models/programModel";
import { IProgram } from "../models/programModel";
import Company from "../types/Company";
import Timeline from "../types/Timeline";
import mongoose from "mongoose";

class ProgramManager {
  private parseProgram(documentProgram: IProgram | null): Internship | null {
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
      case "INTERN": {
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
  public async getAllPrograms(): Promise<Program[]> {
    const programs = await ProgramModel.find();
    return programs;
  }

  public async getProgramId(id: string): Promise<Program | null> {
    const program = await ProgramModel.findById(id);
    return this.parseProgram(program);
  }

  public async createProgram(program: Internship): Promise<Program> {
    if (program instanceof Internship) {
      const newProgram = await ProgramModel.create(program);
      newProgram.save();
      return newProgram;
    } else {
      throw new Error("Error, program doesn't a compatible type");
    }
  }

  public async create(program: Internship): Promise<IProgram> {
    return ProgramModel.create(program);
  }

  private async parseProgramDocument(
    program: Program
  ): Promise<IProgram | null> {
    const programDocument: IProgram | null = await ProgramModel.findById(
      program.programId
    );

    if (programDocument === null) return null;

    const { programType } = programDocument;

    switch (programType) {
      case "INTERN": {
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

  public async save(program: Program) {
    const documentProgram = await this.parseProgramDocument(program);
    documentProgram?.save();
  }
}

export default ProgramManager;
