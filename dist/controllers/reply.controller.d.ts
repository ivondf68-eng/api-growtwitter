import { Request, Response } from "express";
declare class ReplyController {
    create(req: Request<{
        idTweetPai: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
    listByTweet(req: Request<{
        idTweetPai: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const replyController: ReplyController;
export {};
//# sourceMappingURL=reply.controller.d.ts.map