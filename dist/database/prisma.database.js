"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository = void 0;
const prisma_config_1 = require("../config/prisma.config");
class GrowTwitterRepository {
    async createUser(data) {
        return await prisma_config_1.prisma.user.create({
            data
        });
    }
    async listUsers() {
        return await prisma_config_1.prisma.user.findMany();
    }
    async findUserById(idUser) {
        return await prisma_config_1.prisma.user.findUnique({
            where: {
                idUser
            }
        });
    }
    async updateUser(idUser, data) {
        return await prisma_config_1.prisma.user.update({
            where: {
                idUser
            },
            data
        });
    }
    async deleteUser(idUser) {
        return await prisma_config_1.prisma.user.delete({
            where: {
                idUser
            }
        });
    }
    async findUserByEmail(email) {
        return await prisma_config_1.prisma.user.findUnique({
            where: {
                email
            }
        });
    }
    async createTweet(data) {
        return await prisma_config_1.prisma.tweet.create({
            data
        });
    }
    async listTweets() {
        return await prisma_config_1.prisma.tweet.findMany({
            where: {
                idTweetPai: null
            },
            include: {
                replies: true
            }
        });
    }
    async findTweetById(idTweet) {
        return await prisma_config_1.prisma.tweet.findUnique({
            where: {
                idTweet
            }
        });
    }
    async updateTweet(idTweet, data) {
        return await prisma_config_1.prisma.tweet.update({
            where: {
                idTweet
            },
            data
        });
    }
    async deleteTweet(idTweet) {
        return await prisma_config_1.prisma.tweet.delete({
            where: {
                idTweet
            }
        });
    }
    async createLike(data) {
        return await prisma_config_1.prisma.like.create({
            data
        });
    }
    async findLike(data) {
        return await prisma_config_1.prisma.like.findUnique({
            where: {
                idUser_idTweet: data
            }
        });
    }
    async deleteLike(data) {
        return await prisma_config_1.prisma.like.delete({
            where: {
                idUser_idTweet: data
            }
        });
    }
    async createFollow(data) {
        return await prisma_config_1.prisma.follow.create({
            data
        });
    }
    async findFollow(data) {
        return await prisma_config_1.prisma.follow.findUnique({
            where: {
                idSeguidor_idSeguido: data
            }
        });
    }
    async deleteFollow(data) {
        return await prisma_config_1.prisma.follow.delete({
            where: {
                idSeguidor_idSeguido: data
            }
        });
    }
    async findRepliesByTweetId(idTweetPai) {
        return await prisma_config_1.prisma.tweet.findMany({
            where: {
                idTweetPai
            },
            orderBy: {
                dtCriacao: 'asc'
            }
        });
    }
    async listFeed(idUser) {
        const following = await prisma_config_1.prisma.follow.findMany({
            where: {
                idSeguidor: idUser
            },
            select: {
                idSeguido: true
            }
        });
        return await prisma_config_1.prisma.tweet.findMany({
            where: {
                idTweetPai: null,
                idUser: {
                    in: [idUser, ...following.map(follow => follow.idSeguido)]
                }
            },
            include: {
                replies: true
            },
            orderBy: {
                dtCriacao: 'desc'
            }
        });
    }
}
exports.repository = new GrowTwitterRepository();
//# sourceMappingURL=prisma.database.js.map