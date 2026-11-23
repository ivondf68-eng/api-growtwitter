import { Request, Response } from "express";
import { handleError } from "../config/error.handler";
import { userService } from "../services/user.service";
import { sessionDatabase } from "../database/session.database";


class LoginController {
    public async login(req: Request, res: Response) {
        try {
            const data = req.body;

            const result = await userService.login(data);

            return res.status(result.code).send(result);
        
        } catch(error){
            return handleError(error, res);
        }

    }

    public async logout(req: Request, res: Response) {
        try {
            const login = req.headers["login"] as string;

            sessionDatabase.delete(login);  

            return res.status(200).send({
                code: 200,
                message: "Logout realizado com sucesso."
            });

        } catch (error) {
            return handleError(error, res);
        }
    }
}

export const loginController = new LoginController();