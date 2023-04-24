import { Request, Response } from "express";
import Faculty from "../../models/faculty";
import User from "../../models/user";

export const getFaculty = async (req: Request, res: Response) => {
  try {
    const facultyId = req.params.facultyId;
    let faculty = await Faculty.findOne({
      include: User,
      where: { id: facultyId },
    });
    if (!faculty) {
      return res.status(404).json({
        msg: "failure",
        data: null,
        error: "faculty not found",
      });
    }
    return res.status(200).json({
      msg: "success",
      data: faculty,
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
