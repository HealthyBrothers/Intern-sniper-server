import Program from "../classes/Program";
import ProgramModel from "../models/ProgramModel";
import Company from "../classes/Company";
import Timeline from "../classes/Timeline";

class ProgramManager {
  public async getProgramByName(name: String): Promise<Program[]> {
    const program = await ProgramModel.find();
    return program;
  }

  public async createProgram(program: Program): Promise<Program> {
    const newProgram = await ProgramModel.create(program);
    return newProgram;
  }

  public async updateProgram(program: Program) {
    const updatedProgram = await ProgramModel.findOneAndUpdate;
  }
}

export default ProgramManager;
