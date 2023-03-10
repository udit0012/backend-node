import { Request, Response, CookieOptions } from "express";

export const logout = async(req:Request,res:Response)=>{
        return res
          .clearCookie("token")
          .status(200)
          .json({ message: "Successfully logged out" });
}
export const refresh = async(req:Request,res:Response)=>{
    // token refresh code
    
    // return res
    //   .clearCookie("token")
    //   .status(200)
    //   .json({ message: "Successfully logged out" });
}