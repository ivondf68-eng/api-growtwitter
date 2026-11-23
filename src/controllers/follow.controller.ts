import { Request, Response } from "express";
import { followService } from "../services/follow.service";
import { handleError } from "../config/error.handler";


export class FollowController {
    public async create(req: Request<{ idSeguido: string }>, res: Response) {
        try {
            const { idSeguido } = req.params;
            const idSeguidor = res.locals.idUser;

            const result = await followService.create({
                idSeguidor,
                idSeguido
            });

            return res.status(result.code).send(result);

        } catch(error: any){
            return handleError(error, res);
        }
    }

    public async delete(req: Request<{ idSeguido: string }>, res: Response) {
        try {
            const { idSeguido } = req.params;
            const idSeguidor = res.locals.idUser;

            const result = await followService.delete({
                idSeguidor,
                idSeguido
            });

            return res.status(result.code).send(result);
        } catch(error: any){
            return handleError(error, res);
        }
    }
}