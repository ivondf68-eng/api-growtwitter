import { Request, Response } from "express";
export declare class TweetController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    list(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findById(req: Request<{
        idTweet: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request<{
        idTweet: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request<{
        idTweet: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=tweet.controller.d.ts.map