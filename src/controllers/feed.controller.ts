import { Request, Response } from "express";
import { feedService } from "../services/feed.service";
import { handleError } from "../config/error.handler";


class FeedController {
    public async list(req: Request<{ idUser: string }>, res: Response) {
        try {
            const idUser = res.locals.idUser;
        
            const result = await feedService.list(idUser);

            return res.status(result.code).send(result);

        } catch (error) {
            return handleError(error, res);
        }
    }
}

export const feedController = new FeedController();