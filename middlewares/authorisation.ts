import { NextFunction, Request, Response } from "express";

import jwt,{Secret,JwtPayload} from "jsonwebtoken";

export interface CustomRequest extends Request{
  token : string | JwtPayload
}

const authorisation = (req:Request, res:Response, next:NextFunction) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('token');
    if (!token) {
        res.status(401).send({ error: "Access Denied" })
    }
    try {
        const data = jwt.verify(token, process.env.KEY||"supersecretkey");
        (req as CustomRequest).token = data;
        next();
    } catch (error) {
        res.status(401).send({ error: "Access Denied" })
    }

}


module.exports = authorisation;

