import { Request, Response } from "express";
import Complaint from "../../models/complaint";
// import Student from "../../models/student";
// import User from "../../models/user";

export const getComplaint = async (req: Request, res: Response) => {
  try {
    const complaintId = req.params.complaintId;
    let complaint = await Complaint.findOne({
      where: {
        id: complaintId,
      },
    });
    return res.status(200).json({
      msg: "success",
      data: complaint,
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

export const getComplaintsByLvl = async (req: Request, res: Response) => {
  try {
    const lvl = req.params.level
    let complaints = await Complaint.findAll({
      where: {
        level: lvl
      },
    });
    return res.status(200).json({
      msg: "success",
      data: complaints,
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

export const addComplaint = async (req: Request, res: Response) => {
  try {
    let complaint = req.body;
    complaint = await Complaint.create(complaint)
    return res.status(200).json({
      msg: "success",
      data: complaint,
      error: null
    })
  } catch (e) {
    return res.status(500).json({
      msg: "failure",
      data: null,
      error: e,
    });
  }
}

export const forwardComplaint = async (req: Request, res: Response) => {
  try {
    const complaintId = req.body.id;
    const level = req.body.level;
    await Complaint.update({ level: level }, {
      where: {
        id: complaintId
      }
    })
    return res.status(200).json({
      msg: "success",
      data: null,
      error: null
    })
  } catch (e) {
    return res.status(500).json({
      msg: "failure",
      data: null,
      error: e,
    });
  }
}
