import Student from "../../models/student";
import Faculty from "../../models/faculty";
import User from "../../models/user";
// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken"
import { validationResult } from "express-validator";
import { Request, Response, CookieOptions } from "express";
import StudentLeave from "../../models/studentLeave";
// import authentication from "../../middleware/authentication";
const applyLeave = async (req: Request, res: Response) => {
    const studentId = req.body.id
  const { startDate, endDate, workingDays, reason, placeOfStay } =
    req.body;
  // const status = req.body.status
  const { advisorApproval, wardenApproval } = req.body;
  // router.post('/applyLeave', upload.single("file"), authentication, async (req: Request, res: Response)=> {
  let file = req.file;
  let student = await Student.findOne({
    // where: { email: res.locals.user.email }
    where: { id: studentId },
  });
  if (!student) {
    // return res.status(400).json({ success: false, error: "Login First" })
    return res.status(404).json({ msg: "student not found" });
  }
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ success: false, errors: err.array() });
    }
    let leave = await StudentLeave.create({
      id: studentId,
      startDate,
      endDate,
      workingDays,
      reason,
      placeOfStay,
      // status,
      advisorApproval,
      wardenApproval,
      fileDocument: file,
    });
    // console.log(leaves)
    return res.status(200).json({ leaves: leave });
  } catch (error) {
    // console.log(error);
    // console.log(user)
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

// Get All Leaves Details of One Student using college id for student
const getStudentLeaves = async (req: Request, res: Response) => {
  let studentId = req.params.studentId;
  let student = await Student.findOne({
    // where: { email: res.locals.user.email },
    where: { id: studentId },
  });
  if (!student) {
    return res.status(404).json({ msg: "student not found" });
    // return res
    //   .status(400)
    //   .json({ success: false, error: "Login First/For Student only" });
  }
  try {
    const leave = await StudentLeave.findAll({
      where: { id: studentId },
    });
    res.status(200).json(leave);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get All Leaves Details of One Student using Advisor Code for advisor

const getAdviseesLeaves = async (req: Request, res: Response) => {
  let advisorCode = req.params.advisorCode;
  // let faculty = await Faculty.findOne({
  //   where: { email: res.locals.user.email },
  // });
  // if (!faculty) {
  //   return res
  //     .status(400)
  //     .json({ success: false, error: "Login First/For Advisor only" });
  // }
  try {
    const leave = await StudentLeave.findAll({
      where: {
        advisorCode: advisorCode,
      },
    });
    // if(!leaves){
    //     return res.status(401).json({error:"Invalid credentials"});
    // }
    res.status(200).json(leave);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get All Leaves Details of One Student using college id for student and warden

const getHostelLeaves = async (req: Request, res: Response) => {
  let hostel = req.params.hostel;
  // let warden = await Faculty.findOne({
  //   where: { email: res.locals.user.email },
  // });
  // if (!warden) {
  //   return res.status(400).json({
  //     success: false,
  //     error: "Login First/For Student & Warden only",
  //   });
  // }
  try {
    const leaves = await StudentLeave.findAll({
      where: {
        hostel: hostel,
      },
    });
    // if(!leaves){
    //     return res.status(401).json({error:"Invalid credentials"});
    // }
    res.status(200).json(leaves);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// FOR ADVISOR
// router.get(
//   "/advisorApproval/:id",
//   authentication,
const advisorApproval = async (req: Request, res: Response) => {
  let id = req.params.id;
  // let advisor = await Faculty.findOne({
  //   where: { email: res.locals.user.email },
  // });
  // if (!advisor) {
  //   return res.status(400).json({ success: false, error: "Login First" });
  // }
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ success: false, errors: err.array() });
    }
    // const leave = await StudentLeave.findOne({
    //   where: {
    //     id: id,
    //   },
    // });
    await StudentLeave.update(
      {
        advisorApproval: true,
      },
      {
        where: {
          id: id,
        },
      }
    );
    let leave = await StudentLeave.findOne({
      where: {
        id: id,
      },
    });
    // if(!leaves){
    //     return res.status(401).json({error:"Invalid credentials"});
    // }
    return res.status(200).json({ leave: leave });
  } catch (error) {
    console.log(error);
    // console.log(user)
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

// FOR ADVISOR
// router.get(
//   "/advisorRejection/:id",
//   authentication,
const advisorRejection = async (req: Request, res: Response) => {
  let id = req.params.id;
  // let advisor = await Faculty.findOne({
  //   where: { email: res.locals.user.email },
  // });
  // if (!advisor) {
  //   return res.status(400).json({ success: false, error: "Login First" });
  // }
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ success: false, errors: err.array() });
    }
    // const leave = await StudentLeave.findOne({
    //   where: {
    //     id: id,
    //   },
    // });
    await StudentLeave.update(
      {
        advisorApproval: false,
      },
      {
        where: {
          id: id,
        },
      }
    );
    let leave = await StudentLeave.findOne({
      where: {
        id: id,
      },
    });
    // if(!leaves){
    //     return res.status(401).json({error:"Invalid credentials"});
    // }
    return res.status(200).json({ leave: leave });
  } catch (error) {
    console.log(error);
    // console.log(user)
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

// FOR Warden Aproval
// router.get(
//   "/wardenApproval/:id",
//   authentication,
const wardenApproval = async (req: Request, res: Response) => {
  let id = req.params.id;
  // let warden = await Faculty.findOne({
  //   where: { email: res.locals.user.email },
  // });
  // if (!warden) {
  //   return res.status(400).json({ success: false, error: "Login First" });
  // }
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ success: false, errors: err.array() });
    }
    // const leave = await StudentLeave.findOne({
    //   where: {
    //     id: id,
    //   },
    // });
    await StudentLeave.update(
      {
        wardenApproval: true,
      },
      {
        where: {
          id: id,
        },
      }
    );
    // if(!leaves){
    //     return res.status(401).json({error:"Invalid credentials"});
    // }
    let leave = await StudentLeave.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ leave: leave });
  } catch (error) {
    // console.log(error);
    // console.log(user)
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

// FOR Warden Rejection
// router.get(
//   "/wardenRejection/:id",
//   authentication,
const wardenRejection = async (req: Request, res: Response) => {
  let id = req.params.id;
  // let warden = await Faculty.findOne({
  //   where: { email: res.locals.user.email },
  // });
  // if (!warden) {
  //   return res.status(400).json({ success: false, error: "Login First" });
  // }
  try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ success: false, errors: err.array() });
    }
    // const leave = await StudentLeave.findOne({
    //   where: {
    //     id: id,
    //   },
    // });
    await StudentLeave.update(
      {
        wardenApproval: false,
      },
      {
        where: {
          id: id,
        },
      }
    );
    let leave = await StudentLeave.findOne({
      where: {
        id: id,
      },
    });
    // if(!leaves){
    //     return res.status(401).json({error:"Invalid credentials"});
    // }
    return res.status(200).json({ leave: leave });
  } catch (error) {
    console.log(error);
    // console.log(user)
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

// module.exports = router;
export {
  applyLeave,
  getStudentLeaves,
  getAdviseesLeaves,
  getHostelLeaves,
  advisorApproval,
  wardenApproval,
  advisorRejection,
  wardenRejection,
};
