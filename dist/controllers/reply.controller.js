"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyController = void 0;
const reply_service_1 = require("../services/reply.service");
const error_handler_1 = require("../config/error.handler");
class ReplyController {
    async create(req, res) {
        try {
            const { idTweetPai } = req.params;
            const { mensagem } = req.body;
            const idUser = res.locals.idUser;
            const result = await reply_service_1.replyService.create({
                mensagem,
                idUser,
                idTweetPai
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async listByTweet(req, res) {
        try {
            const { idTweetPai } = req.params;
            const result = await reply_service_1.replyService.listByTweet(idTweetPai);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
}
exports.replyController = new ReplyController();
//# sourceMappingURL=reply.controller.js.map