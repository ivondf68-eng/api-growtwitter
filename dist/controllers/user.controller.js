"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const error_handler_1 = require("../config/error.handler");
const user_service_1 = require("../services/user.service");
class UserController {
    async create(req, res) {
        try {
            const { nome, email, senha, img } = req.body;
            if (!nome || !email || !senha || !img) {
                return res.status(400).send({
                    ok: false,
                    message: "É obrigatório preencher todos os campos"
                });
            }
            const result = await user_service_1.userService.create(req.body);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async list(req, res) {
        try {
            const result = await user_service_1.userService.list();
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async findById(req, res) {
        try {
            const idUser = res.locals.idUser;
            const result = await user_service_1.userService.findById(idUser);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async update(req, res) {
        try {
            const idUser = res.locals.idUser;
            const result = await user_service_1.userService.updateUser(idUser, req.body);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async delete(req, res) {
        try {
            const idUser = res.locals.idUser;
            const result = await user_service_1.userService.deleteUser(idUser);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map