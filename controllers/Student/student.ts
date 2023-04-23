import { Request, Response, CookieOptions } from "express";
import Student from "../../models/student";
import { hashSync, genSaltSync, compareSync } from "bcrypt";

export const getStudent = async (req: Request, res: Response) => {
  const studentId: string = req.body.studentId;

  let student = await Student.findOne({
    where: {
      studentId: studentId
    }
  })

  if (student) {
    res.status(200).json(student)
  }
}

export const updateStudent = async (req: Request, res: Response) => {
  // const { studentId, degree, discipline, fatherName, motherName, parentPhone, parentEmail} = req.body
  const student = req.body
  const studentId = student.studentId
  delete student["studentId"]
  await Student.update(student, {
    where: {
      studentId: studentId
    }
  });
  res.status(200).json({ msg: "succesfully updated "})
}
