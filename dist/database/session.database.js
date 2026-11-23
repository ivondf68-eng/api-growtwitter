"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionDatabase = void 0;
const sessions = new Map();
exports.sessionDatabase = {
    create(login, idUser) {
        sessions.set(login, idUser);
    },
    findUserByLogin(login) {
        return sessions.get(login);
    },
    delete(login) {
        return sessions.delete(login);
    }
};
//# sourceMappingURL=session.database.js.map