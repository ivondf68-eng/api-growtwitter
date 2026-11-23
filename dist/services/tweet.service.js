"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tweetService = void 0;
const prisma_database_1 = require("../database/prisma.database");
class TweetService {
    async create(data) {
        const user = await prisma_database_1.repository.findUserById(data.idUser);
        if (!user) {
            return {
                code: 404,
                message: "Usuário não encontrado."
            };
        }
        if (!data.mensagem.trim()) {
            return {
                code: 400,
                message: "É obrigatório enviar a mensagem"
            };
        }
        const tweet = await prisma_database_1.repository.createTweet(data);
        return {
            code: 201,
            message: "Tweet criado com sucesso",
            data: tweet
        };
    }
    async list() {
        const tweets = await prisma_database_1.repository.listTweets();
        if (!tweets.length) {
            return {
                code: 200,
                message: "Ainda não há tweets"
            };
        }
        return {
            code: 200,
            data: tweets
        };
    }
    async findById(idTweet) {
        const tweet = await prisma_database_1.repository.findTweetById(idTweet);
        if (!tweet) {
            return {
                code: 404,
                message: "Tweet não encontrado.",
            };
        }
        return {
            code: 200,
            data: tweet
        };
    }
    async update(idTweet, idUser, data) {
        const tweet = await prisma_database_1.repository.findTweetById(idTweet);
        if (!tweet) {
            return {
                code: 404,
                message: "Tweet não encontrado.",
            };
        }
        if (tweet.idUser !== idUser) {
            return {
                code: 400,
                message: "Você não tem permissão para editar este Tweet."
            };
        }
        if (data.mensagem !== undefined && !data.mensagem.trim()) {
            return {
                code: 400,
                message: "A mensagem do Tweet não pode ser vazia."
            };
        }
        const tweetAtualizado = await prisma_database_1.repository.updateTweet(idTweet, data);
        return {
            code: 200,
            message: "Tweet atualizado com sucesso",
            data: tweetAtualizado
        };
    }
    async delete(idTweet, idUser) {
        const tweet = await prisma_database_1.repository.findTweetById(idTweet);
        if (!tweet) {
            return {
                code: 404,
                message: "Tweet não encontrado.",
            };
        }
        if (tweet.idUser !== idUser) {
            return {
                code: 400,
                message: "Você não tem permissão para excluir este Tweet."
            };
        }
        const deletedTweet = await prisma_database_1.repository.deleteTweet(idTweet);
        return {
            code: 200,
            message: "Tweet excluído com sucesso",
            data: deletedTweet
        };
    }
}
exports.tweetService = new TweetService();
//# sourceMappingURL=tweet.service.js.map