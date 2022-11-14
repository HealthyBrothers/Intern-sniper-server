import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: String,
  role: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  studyingYear: Number,
  profilePicture: String,
  university: String,
  interestedField: [String],
  favoriteProgram: [[{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }]],
  mediaLink: [{ type: mongoose.Schema.Types.ObjectId, ref: "MediaLink" }],
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "ApprovalTx" }],
  companyName: String,
  issuedProgram: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
  phoneNumber: String,
  location: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
