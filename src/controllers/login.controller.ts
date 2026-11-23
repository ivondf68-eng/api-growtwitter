import { Request, Response } from "express";
import { handleError } from "../config/error.handler";
import { userService } from "../services/user.service";


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
}

export const loginController = new LoginController();