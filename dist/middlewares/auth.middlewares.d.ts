import { Request, Response, NextFunction } from "express";
export declare class AuthMiddleware {
    loginMiddleware(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const authMiddleware: AuthMiddleware;
//# sourceMappingURL=auth.middlewares.d.ts.map