"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeController = void 0;
const error_handler_1 = require("../config/error.handler");
const like_service_1 = require("../services/like.service");
class LikeController {
    async create(req, res) {
        try {
            const { idTweet } = req.params;
            const idUser = res.locals.idUser;
            const result = await like_service_1.likeService.create({
                idUser,
                idTweet
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async delete(req, res) {
        try {
            const { idTweet } = req.params;
            const idUser = res.locals.idUser;
            const result = await like_service_1.likeService.delete({
                idUser,
                idTweet
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
}
exports.LikeController = LikeController;
//# sourceMappingURL=like.controller.js.map