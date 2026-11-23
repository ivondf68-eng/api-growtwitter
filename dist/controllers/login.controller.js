"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const error_handler_1 = require("../config/error.handler");
const user_service_1 = require("../services/user.service");
const session_database_1 = require("../database/session.database");
class LoginController {
    async login(req, res) {
        try {
            const data = req.body;
            const result = await user_service_1.userService.login(data);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async logout(req, res) {
        try {
            const login = req.headers["login"];
            session_database_1.sessionDatabase.delete(login);
            return res.status(200).send({
                code: 200,
                message: "Logout realizado com sucesso."
            });
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
}
exports.loginController = new LoginController();
//# sourceMappingURL=login.controller.js.map