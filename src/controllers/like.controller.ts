import { Request, Response } from "express";
import { handleError } from "../config/error.handler";
import { likeService } from "../services/like.service";


export class LikeController {
    public async create(req: Request<{ idTweet: string }>, res: Response){
        try {
            const { idTweet } = req.params;
            const { idUser } = req.body;

            const result = await likeService.create({
                idUser,
                idTweet
            })

            return res.status(result.code).send(result);

        } catch(error: any){
            return handleError(error, res);
        }
    }

    public async delete(req: Request<{ idTweet: string }>, res: Response) {
        try {
            const { idTweet } = req.params;
            const { idUser } = req.body;

            const result = await likeService.delete({
                idUser,
                idTweet
            });

            return res.status(result.code).send(result);
            
        } catch(error: any){
            return handleError(error, res);
        }
    }
}