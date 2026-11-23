"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedService = void 0;
const prisma_database_1 = require("../database/prisma.database");
class FeedService {
    async list(idUser) {
        const user = await prisma_database_1.repository.findUserById(idUser);
        if (!user) {
            return {
                code: 404,
                message: "Usuário não encontrado."
            };
        }
        const feed = await prisma_database_1.repository.listFeed(idUser);
        if (!feed.length) {
            return {
                code: 200,
                message: "Nada para mostrar no Feed"
            };
        }
        return {
            code: 200,
            data: feed
        };
    }
}
exports.feedService = new FeedService();
//# sourceMappingURL=feed.service.js.map