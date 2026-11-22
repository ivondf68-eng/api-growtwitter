import { Request, Response } from "express";
import { handleError } from "../config/error.handler";
import { tweetService } from "../services/tweet.service";

export class TweetController {

    public async create(req: Request, res: Response){
        try {
            const { mensagem } = req.body;

            if(!mensagem){
                return res.status(400).send({
                    ok: false,
                    message: "É obrigatório preencher o campo de mensagem"
                })
            }

            const result = await tweetService.create(req.body);

            return res.status(result.code).send(result);

        } catch(error: any){
            return handleError(error, res);
        }
    }

    public async list(req: Request, res: Response){
        try {
            const result = await tweetService.list();

            return res.status(result.code).send(result);

        } catch(error: any){
            return handleError(error, res);
        }
    }

    public async findById(req: Request<{ idTweet: string }>, res: Response){
        try {
            const { idTweet } = req.params;

            const result = await tweetService.findById(idTweet);

            return res.status(result.code).send(result);

        } catch(error: any){
            return handleError(error, res);
        }
    }

    public async update(req: Request<{ idTweet: string }>, res: Response){
        try {
            const { idTweet } = req.params;
            const { mensagem } = req.body;

            if(!mensagem){
                return res.status(400).send({
                    ok: false,
                    message: "É obrigatório preencher o campo de mensagem"
                })
            }

            const result = await tweetService.update(idTweet, req.body);

            return res.status(result.code).send(result);

        } catch(error: any){
            return handleError(error, res);
        }
    }

    public async delete(req: Request<{ idTweet: string }>, res: Response){
        try {
            const { idTweet } = req.params;

            const result = await tweetService.delete(idTweet);

            return res.status(result.code).send(result);

        } catch(error: any){
            return handleError(error, res);
        }
    }
}