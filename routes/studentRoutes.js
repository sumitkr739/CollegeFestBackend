const express = require("express");
const students = require("../models/student");

const router = express.Router(); // Correct way to initialize the router

// Get student details by enrollment number
router.get("/:enrollmentNo", async (req, res) => {
  try {
    const enrollmentNo = req.params.enrollmentNo.toUpperCase(); // Convert input to uppercase

    const student = await students.findOne({
      EnrollmentNo: { $regex: `^${enrollmentNo}$`, $options: "i" }, // Case-insensitive match
    });

    if (!student) return res.status(404).json({ message: "Student not found" });

    res.json({
      name: student.Name,
      enrollmentNo: student.EnrollmentNo,
      gender: student.Gender,
      course: student.Course,
      branch: student.Branch,
      year: student.Year,
      semester: student.Semester,
      group: student.Group,
      whatsappgroup: student.WhatsappGroup,
    });
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
