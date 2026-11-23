"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const prisma_database_1 = require("../database/prisma.database");
const crypto_1 = require("crypto");
const session_database_1 = require("../database/session.database");
class UserService {
    async create(data) {
        const user = await prisma_database_1.repository.findUserByEmail(data.email);
        if (user) {
            return {
                code: 400,
                message: "O e-mail já está cadastrado"
            };
        }
        const newUser = await prisma_database_1.repository.createUser(data);
        return {
            code: 201,
            message: "Usuário cadastrado com sucesso",
            data: newUser
        };
    }
    async list() {
        const users = await prisma_database_1.repository.listUsers();
        if (!users.length) {
            return {
                code: 200,
                message: "Nenhum usuário cadastrado"
            };
        }
        return {
            code: 200,
            message: "Usuários listados com sucesso",
            data: users
        };
    }
    async findById(idUser) {
        const user = await prisma_database_1.repository.findUserById(idUser);
        if (!user) {
            return {
                code: 404,
                message: "Usuário não existe"
            };
        }
        return {
            code: 200,
            message: "Usuário encontrado",
            data: user
        };
    }
    async updateUser(idUser, data) {
        const user = await prisma_database_1.repository.findUserById(idUser);
        if (!user) {
            return {
                code: 404,
                message: "Usuário não encontrado"
            };
        }
        const updatedUser = await prisma_database_1.repository.updateUser(idUser, data);
        return {
            code: 200,
            message: "Usuário atualizado com sucesso",
            data: updatedUser
        };
    }
    async deleteUser(idUser) {
        const user = await prisma_database_1.repository.findUserById(idUser);
        if (!user) {
            return {
                code: 404,
                message: "Usuário não encontrado"
            };
        }
        const deletedUser = await prisma_database_1.repository.deleteUser(idUser);
        return {
            code: 200,
            message: "Usuário deletado com sucesso",
            data: deletedUser
        };
    }
    async login(data) {
        const user = await prisma_database_1.repository.findUserByEmail(data.email);
        if (!user) {
            return {
                code: 404,
                message: "Usuário não encontrado"
            };
        }
        if (user.senha !== data.senha) {
            return {
                code: 400,
                message: "Senha incorreta"
            };
        }
        const login = (0, crypto_1.randomUUID)();
        session_database_1.sessionDatabase.create(login, user.idUser);
        const { senha, ...userData } = user;
        return {
            code: 200,
            message: "Login realizado com sucesso.",
            data: {
                ...userData,
                login
            }
        };
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map