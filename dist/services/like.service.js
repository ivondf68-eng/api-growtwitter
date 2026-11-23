"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeService = void 0;
const prisma_database_1 = require("../database/prisma.database");
class LikeService {
    async create(data) {
        const user = await prisma_database_1.repository.findUserById(data.idUser);
        if (!user) {
            return {
                code: 404,
                message: "Usuário não encontrado."
            };
        }
        const tweet = await prisma_database_1.repository.findTweetById(data.idTweet);
        if (!tweet) {
            return {
                code: 404,
                message: "Tweet não encontrado."
            };
        }
        const likeExistente = await prisma_database_1.repository.findLike(data);
        if (likeExistente) {
            return {
                code: 400,
                message: "Você já curtiu este Tweet."
            };
        }
        const like = await prisma_database_1.repository.createLike(data);
        return {
            code: 201,
            message: "Tweet curtido com sucesso.",
            data: like
        };
    }
    async delete(data) {
        const user = await prisma_database_1.repository.findUserById(data.idUser);
        if (!user) {
            return {
                code: 404,
                message: "Usuário não encontrado."
            };
        }
        const tweet = await prisma_database_1.repository.findTweetById(data.idTweet);
        if (!tweet) {
            return {
                code: 404,
                message: "Tweet não encontrado."
            };
        }
        const likeExistente = await prisma_database_1.repository.findLike(data);
        if (!likeExistente) {
            return {
                code: 404,
                message: "Like não encontrado."
            };
        }
        const like = await prisma_database_1.repository.deleteLike(data);
        return {
            code: 200,
            message: "Like removido com sucesso.",
            data: like
        };
    }
}
exports.likeService = new LikeService();
//# sourceMappingURL=like.service.js.map