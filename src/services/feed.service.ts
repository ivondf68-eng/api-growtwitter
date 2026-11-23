import { repository } from "../database/prisma.database";


class FeedService {
    public async list(idUser: string){
        const user = await repository.findUserById(idUser);

        if (!user) {
            return {
                code: 404,
                message: "Usuário não encontrado."
            };
        }

        const feed = await repository.listFeed(idUser);

        if(!feed.length){
            return {
                code: 200,
                message: "Nada para mostrar no Feed"
            }
        }

        return {
            code: 200,
            data: feed
        }
    }
}

export const feedService = new FeedService();