import { Request, Response } from "express";
declare class FeedController {
    list(req: Request<{
        idUser: string;
    }>, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const feedController: FeedController;
export {};
//# sourceMappingURL=feed.controller.d.ts.map