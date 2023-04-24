import { Request, Response } from "express";
import Faculty from "../../models/faculty";
import User from "../../models/user";

export const getFaculty = async (req: Request, res: Response) => {
  const facultyId = req.params.facultyId;
  let faculty = await Faculty.findOne({
    include: User,
    where: { facultyId },
  });
  if (!faculty) {
    return res.status(404).json({
      msg: "faculty not found",
      data: null,
      error: null,
    });
  }
  return res.status(200).json({
    msg: "success",
    data: faculty,
    error: null,
  });
};
