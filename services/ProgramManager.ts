import Program from "../classes/Program";
import Internship from "../classes/Internship";
import ProgramModel from "../models/programModel";
import Company from "../classes/Company";
import Timeline from "../classes/Timeline";

class ProgramManager {
  public async getAllPrograms(): Promise<Program[]> {
    const programs = await ProgramModel.find();
    return programs;
  }

  public async getProgramId(id: String): Promise<Program[]> {
    const program = await ProgramModel.find();
    return program;
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
}

export default ProgramManager;
