import { Request, Response } from "express";
import Student from "../../models/student";
import User from "../../models/user";
// import { hashSync, genSaltSync, compareSync } from "bcrypt";

export const addStudent = async (req: Request, res: Response) => {
  try {
    let student = await Student.findOne({
      where: {
        email: res.locals.user.email,
      },
    });
    if (student) {
      return res.status(500).json({
        msg: "failure",
        data: null,
        error: "student already exists",
      });
    }
    student = await Student.create({...req.body, userId: res.locals.user.id});
    return res.status(200).json({
      msg: "success",
      data: student,
      error: null,
    });
  } catch (e) {
    return res.status(500).json({
      msg: "failure",
      data: null,
      error: e
    })
  }
};

export const getStudent = async (req: Request, res: Response) => {
  const studentId: string = req.params.studentId;
  try {
    let student = await Student.findOne({
      include: User,
      where: { id: studentId },
    });
    if (!student) {
      return res.status(404).json({
        msg: "failure",
        data: null,
        error: "student not found",
      });
    }
    return res.status(200).json({
      msg: "success",
      data: student,
      error: null,
    });
  } catch (e) {
    return res.status(500).json({
      msg: "failure",
      data: null,
      error: e,
    });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    let student = req.body;
    const studentId = student.id;
    delete student["id"];
    await Student.update(student, {
      where: { id: studentId },
    });
    return res.status(200).json({
      msg: "success",
      data: null,
      error: null,
    });
  } catch (e) {
    return res.status(500).json({
      msg: "failure",
      data: null,
      error: e
    })
  }
};

export const getAdvisees = async (req: Request, res: Response) => {
  const advisorCode = req.params.advisorCode;
  try {
    let students = await Student.findAll({
      include: User,
      where: {
        FacultyId: advisorCode,
      },
    });
    return res.status(200).json({
      msg: "success",
      data: students,
      error: null,
    });
  } catch (e) {
    return res.status(200).json({
      msg: "failure",
      data: null,
      error: e,
    });
  }
};
