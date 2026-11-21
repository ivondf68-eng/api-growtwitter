import { Request, Response } from "express";
import { handleError } from "../config/error.handler";
import { userService } from "../services/user.service";

export class UserController {
    public async create(req: Request, res: Response){
        try{
            const { nome, email, senha, img } = req.body;

            if(!nome || !email || !senha || !img){
                return res.status(400).send({
                  ok: false,
                  message: "É obrigatório preencher todos os campos"  
                })
            }

            const result = await userService.create(req.body);

            return res.status(result.code).send(result);

        } catch(error: any){
            return handleError(error, res);
        }
    }

    public async list(req: Request, res: Response){
        try{
            const result = await userService.list();

            return res.status(result.code).send(result);

        } catch(error: any){
            return handleError(error, res);
        }
    }

    public async findById(req: Request<{ idUser: string }>, res: Response){
        try {
            const { idUser } = req.params;

            const result = await userService.findById(idUser);

            return res.status(result.code).send(result);
        } catch(error: any){
            return handleError(error, res);
        }
    } 

    public async update(req: Request<{ idUser: string }>, res: Response){
        try {
            const { idUser } = req.params;

            const result = await userService.updateUser(idUser, req.body);

            return res.status(result.code).send(result);
        } catch(error: any){
            return handleError(error, res);
        }
    }

    public async delete(req: Request<{ idUser: string }>, res: Response){
        try {
            const { idUser } = req.params;

            const result = await userService.deleteUser(idUser);

            return res.status(result.code).send(result);
        } catch(error: any){
            return handleError(error, res);
        }
    }
}