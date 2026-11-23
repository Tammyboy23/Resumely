import type {Request, Response} from 'express';

export async function upload(req: Request, res: Response){
    const resume = req.file;

    if(!resume){
        res.status(400).json({
            message:"No File Was Attached"
        });
        return;
    }
    console.log(resume.originalname);
    res.json(resume.originalname);

}