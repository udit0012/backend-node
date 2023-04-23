import { Request, Response, CookieOptions } from "express";
import Student from "../../models/student";
// import { hashSync, genSaltSync, compareSync } from "bcrypt";

export const addStudent = async (req: Request, res: Response) => {
  let student = await Student.findOne({
    where: {
      studentId: req.body.studentId
    }
  })
  if (student) {
    return res.status(409).json({ msg: "student already exists" })
  }
  student = await Student.create(req.body)
  res.status(200).json(student)
}

export const getStudent = async (req: Request, res: Response) => {
  const studentId: string = req.params.studentId;

  let student = await Student.findOne({
    where: { studentId },
  });

  if (student) {
    res.status(200).json(student);
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  // const { studentId, degree, discipline, fatherName, motherName, parentPhone, parentEmail} = req.body
  const student = req.body;
  const studentId = student.studentId;
  delete student["studentId"];
  await Student.update(student, {
    where: { studentId },
  });
  res.status(200).json({ msg: "succesfully updated " });
};

export const getAdvisees = async (req: Request, res: Response) => {
  const advisorCode = req.params.advisorCode;
  let students = await Student.findAll({
    where: {
      advisorCode,
    },
  });
  res.status(200).json(students);
};
