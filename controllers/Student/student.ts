import { Request, Response, CookieOptions } from "express";
import Student from "../../models/student";
// import { hashSync, genSaltSync, compareSync } from "bcrypt";

export const addStudent = async (req: Request, res: Response) => {
  let student = await Student.findOne({
    where: {
      studentId: req.body.studentId,
    },
  });
  if (student) {
    return res
      .status(409)
      .json({ msg: "student already exists", data: null, error: null });
  }
  student = await Student.create(req.body);
  return res.status(200).json({
    msg: "student successfully created",
    data: student,
    error: null,
  });
};

export const getStudent = async (req: Request, res: Response) => {
  const studentId: string = req.params.studentId;
  let student = await Student.findOne({
    where: { studentId },
  });
  if (!student) {
    return res.status(404).json({
      msg: "student not found",
      data: null,
      error: null,
    });
  }
  return res.status(200).json({
    msg: "success",
    data: student,
    error: null,
  });
};

export const updateStudent = async (req: Request, res: Response) => {
  let student = req.body;
  const studentId = student.studentId;
  delete student["studentId"];
  student = await Student.update(student, {
    where: { studentId },
  });
  return res.status(200).json({
    msg: "succesfully updated",
    data: student,
    error: null,
  });
};

export const getAdvisees = async (req: Request, res: Response) => {
  const advisorCode = req.params.advisorCode;
  let students = await Student.findAll({
    where: {
      advisorCode,
    },
  });
  return res.status(200).json({
    msg: "success",
    data: students,
    error: null
  });
};
