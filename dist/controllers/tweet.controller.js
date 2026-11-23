"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetController = void 0;
const error_handler_1 = require("../config/error.handler");
const tweet_service_1 = require("../services/tweet.service");
class TweetController {
    async create(req, res) {
        try {
            const { mensagem } = req.body;
            const idUser = res.locals.idUser;
            if (!mensagem) {
                return res.status(400).send({
                    ok: false,
                    message: "É obrigatório preencher o campo de mensagem"
                });
            }
            const result = await tweet_service_1.tweetService.create({
                ...req.body,
                idUser
            });
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async list(req, res) {
        try {
            const result = await tweet_service_1.tweetService.list();
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async findById(req, res) {
        try {
            const { idTweet } = req.params;
            const result = await tweet_service_1.tweetService.findById(idTweet);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
    async update(req, res) {
        try {
            const { idTweet } = req.params;
            const { mensagem } = req.body;
            const idUser = res.locals.idUser;
            if (!mensagem) {
                return res.status(400).send({
                    ok: false,
                    message: "É obrigatório preencher o campo de mensagem"
                });
            }
            const result = await tweet_service_1.tweetService.update(idTweet, idUser, req.body);
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
            const result = await tweet_service_1.tweetService.delete(idTweet, idUser);
            return res.status(result.code).send(result);
        }
        catch (error) {
            return (0, error_handler_1.handleError)(error, res);
        }
    }
}
exports.TweetController = TweetController;
//# sourceMappingURL=tweet.controller.js.map