"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyService = void 0;
const prisma_database_1 = require("../database/prisma.database");
class ReplyService {
    async create(data) {
        const user = await prisma_database_1.repository.findUserById(data.idUser);
        if (!user) {
            return {
                code: 404,
                message: "Usuário não encontrado."
            };
        }
        if (data.idTweetPai === undefined) {
            return {
                code: 400,
                message: "O ID do Tweet original é obrigatório"
            };
        }
        const tweetPai = await prisma_database_1.repository.findTweetById(data.idTweetPai);
        if (!tweetPai) {
            return {
                code: 404,
                message: "Tweet original não encontrado."
            };
        }
        const reply = await prisma_database_1.repository.createTweet(data);
        return {
            code: 201,
            message: "Resposta criada com sucesso.",
            data: reply
        };
    }
    async listByTweet(idTweetPai) {
        const tweetPai = await prisma_database_1.repository.findTweetById(idTweetPai);
        if (!tweetPai) {
            return {
                code: 404,
                message: "Tweet original não encontrado."
            };
        }
        const replies = await prisma_database_1.repository.findRepliesByTweetId(idTweetPai);
        return {
            code: 200,
            message: "Respostas listadas com sucesso.",
            data: replies
        };
    }
}
exports.replyService = new ReplyService();
//# sourceMappingURL=reply.service.js.map