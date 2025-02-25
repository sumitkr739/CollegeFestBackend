const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  Name: String,
  EnrollmentNo: { type: String, unique: true },
  Gender: String,
  Course: String,
  Branch: String,
  Year: Number,
  Semester: Number,
  Group: String, // Malva, Purvanchal, Mahakoushal, Bundelkhand
  WhatsappGroup: String,
});

module.exports = mongoose.model("students", studentSchema);
