import { Request, Response } from "express";
import { replyService } from "../services/reply.service";
import { handleError } from "../config/error.handler";


class ReplyController {
    public async create(req: Request<{ idTweetPai: string }>, res: Response) {
        try {
            const { idTweetPai } = req.params;
            const { mensagem, idUser } = req.body;

            const result = await replyService.create({
                mensagem,
                idUser,
                idTweetPai
            });

            return res.status(result.code).send(result);
        
        } catch(error: any){
            return handleError(error, res);
        }
    }

    public async listByTweet(req: Request<{ idTweetPai: string }>, res: Response) {
        try {
            const { idTweetPai } = req.params;

            const result = await replyService.listByTweet(idTweetPai);

            return res.status(result.code).send(result);

        } catch (error) {
            return handleError(error, res);
        }
    }
}

export const replyController = new ReplyController();