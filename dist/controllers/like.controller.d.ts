import { Request, Response } from "express";
export declare class LikeController {
    create(req: Request<{
        idTweet: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request<{
        idTweet: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=like.controller.d.ts.map