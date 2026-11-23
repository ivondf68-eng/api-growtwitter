"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = exports.AuthMiddleware = void 0;
const error_handler_1 = require("../config/error.handler");
const session_database_1 = require("../database/session.database");
class AuthMiddleware {
    async loginMiddleware(req, res, next) {
        try {
            const login = req.headers["login"];
            if (!login || typeof login !== "string") {
                return res.status(400).send({
                    code: 400,
                    message: "Usuário não autenticado."
                });
            }
            const idUser = await session_database_1.sessionDatabase.findUserByLogin(login);
            if (!idUser) {
                return res.status(400).send({
                    code: 400,
                    message: "Usuário inválido."
                });
            }
            res.locals.idUser = idUser;
            next();
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
exports.authMiddleware = new AuthMiddleware();
//# sourceMappingURL=auth.middlewares.js.map