import { Request, Response } from "express";
export declare class FollowController {
    create(req: Request<{
        idSeguido: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request<{
        idSeguido: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=follow.controller.d.ts.map