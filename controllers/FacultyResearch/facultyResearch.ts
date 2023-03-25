import { subtle } from "crypto"
import { Request, Response,CookieOptions } from "express"
import Faculty from "../../models/faculty"
import Research from "../../models/research"
export const addResearch=async(req:Request,res:Response)=>{
    const {FacultyRef,Topic,SubTopic,PublishedID,PublishedDate,PublisherName,ResearchLink}=req.body
    if(!FacultyRef || !Topic || !SubTopic || !PublishedID || !PublishedDate || !PublisherName){
        return res.status(400).json({error:"Invalid Research adding request"})
    }
    // try {
    //     let research = await Research.create({
    //         FacultyRef:req.data.email,
    //         Topic:Topic,
    //         SubTopic:SubTopic,
    //         PublishedID:PublishedID,
    //         PublishedDate:PublishedDate,
    //         PublisherName:PublisherName,
    //         ResearchLink:ResearchLink,
    //     })
        
    // } catch (error) {
    //     return res.status(500).send("Internal server error")
    //     console.log(error);
        
    // }
}
export const getAllResearch=async(req:Request,res:Response)=>{

}
export const searchResearch=async(req:Request,res:Response)=>{

}