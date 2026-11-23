"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.followService = void 0;
const prisma_database_1 = require("../database/prisma.database");
class FollowService {
    async create(data) {
        const seguidor = await prisma_database_1.repository.findUserById(data.idSeguidor);
        if (!seguidor) {
            return {
                code: 404,
                message: "Seguidor não encontrado"
            };
        }
        const seguido = await prisma_database_1.repository.findUserById(data.idSeguido);
        if (!seguido) {
            return {
                code: 404,
                message: "usuário a ser seguido não foi encontrado"
            };
        }
        if (seguidor.idUser === seguido.idUser) {
            return {
                code: 400,
                message: "Não é possível seguir a si mesmo"
            };
        }
        const followExistente = await prisma_database_1.repository.findFollow(data);
        if (followExistente) {
            return {
                code: 400,
                message: "Você já segue este usuário"
            };
        }
        const follow = await prisma_database_1.repository.createFollow(data);
        return {
            code: 201,
            message: "Usuário seguido com sucesso",
            data: follow
        };
    }
    async delete(data) {
        const seguidor = await prisma_database_1.repository.findUserById(data.idSeguidor);
        if (!seguidor) {
            return {
                code: 404,
                message: "Seguidor não encontrado."
            };
        }
        const seguido = await prisma_database_1.repository.findUserById(data.idSeguido);
        if (!seguido) {
            return {
                code: 404,
                message: "Usuário seguido não encontrado."
            };
        }
        const follow = await prisma_database_1.repository.deleteFollow(data);
        return {
            code: 200,
            message: "Você deixou de seguir este usuário.",
            data: follow
        };
    }
}
exports.followService = new FollowService();
//# sourceMappingURL=follow.service.js.map