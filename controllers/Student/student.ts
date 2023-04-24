import { Request, Response, CookieOptions } from "express";
import Student from "../../models/student";
import User from "../../models/user";
// import { hashSync, genSaltSync, compareSync } from "bcrypt";

// export const addStudent = async (req: Request, res: Response) => {
//   let student = await Student.findOne({
//     where: {
//       id: req.body.studentId,
//     },
//   });
//   if (student) {
//     return res
//       .status(409)
//       .json({ msg: "student already exists", data: null, error: null });
//   }
//   student = await Student.create(req.body);
//   return res.status(200).json({
//     msg: "student successfully created",
//     data: student,
//     error: null,
//   });
// };

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
      error: e
    })
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  let student = req.body;
  const studentId = student.id;
  delete student["id"];
  student = await Student.update(student, {
    where: { id: studentId },
  });
  return res.status(200).json({
    msg: "succesfully updated",
    data: student,
    error: null,
  });
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
      error: null
    });
  } catch (e) {
    return res.status(200).json({
      msg: "failure",
      data: null,
      error: e
    });
  }
};
