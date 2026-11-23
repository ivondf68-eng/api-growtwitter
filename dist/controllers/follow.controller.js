"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowController = void 0;
const follow_service_1 = require("../services/follow.service");
const error_handler_1 = require("../config/error.handler");
class FollowController {
    async create(req, res) {
        try {
            const { idSeguido } = req.params;
            const idSeguidor = res.locals.idUser;
            const result = await follow_service_1.followService.create({
                idSeguidor,
                idSeguido
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async delete(req, res) {
        try {
            const { idSeguido } = req.params;
            const idSeguidor = res.locals.idUser;
            const result = await follow_service_1.followService.delete({
                idSeguidor,
                idSeguido
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
}
exports.FollowController = FollowController;
//# sourceMappingURL=follow.controller.js.map