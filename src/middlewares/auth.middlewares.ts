import { Request, Response, NextFunction } from "express"
import { handleError } from "../config/error.handler";
import { sessionDatabase } from "../database/session.database";

export class AuthMiddleware {
    public async loginMiddleware (req: Request, res: Response, next: NextFunction) {
        try {
            const login = req.headers["login"];

            if (!login || typeof login !== "string"){
                return res.status(400).send({
                    code: 400,
                    message: "Usuário não autenticado."
                });
            }

            const idUser = await sessionDatabase.findUserByLogin(login);

            if (!idUser) {
                return res.status(400).send({
                    code: 400,
                    message: "Usuário inválido."
                });
            }

            res.locals.idUser = idUser;

            next();
            
        } catch (error) {
            return handleError(error, res);
        }
    }

}

export const authMiddleware = new AuthMiddleware();