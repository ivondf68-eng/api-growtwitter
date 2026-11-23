import { Request, Response } from "express";
export declare class UserController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    list(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findById(req: Request<{
        idUser: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request<{
        idUser: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request<{
        idUser: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=user.controller.d.ts.map