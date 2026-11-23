const sessions = new Map<string, string>();

export const sessionDatabase = {
    create(login: string, idUser: string) {
        sessions.set(login, idUser);
    },

    findUserByLogin(login: string) {
        return sessions.get(login);
    }
    
};