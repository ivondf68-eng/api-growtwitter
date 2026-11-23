import { Request, Response } from "express";
declare class LoginController {
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const loginController: LoginController;
export {};
//# sourceMappingURL=login.controller.d.ts.map