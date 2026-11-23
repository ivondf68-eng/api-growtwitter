import { repository } from '../database/prisma.database';
import { CreateTweetDTO } from './../dtos/tweet.dto';

class ReplyService {
    public async create(data: CreateTweetDTO) {
        const user = await repository.findUserById(data.idUser);

        if (!user) {
            return {
                code: 404,
                message: "Usuário não encontrado."
            };
        }

        if(data.idTweetPai === undefined){
            return {
                code: 400,
                message: "O ID do Tweet original é obrigatório"
            }
        }

        const tweetPai = await repository.findTweetById(data.idTweetPai);

        if (!tweetPai) {
            return {
                code: 404,
                message: "Tweet original não encontrado."
            };
        }

        const reply = await repository.createTweet(data);

        return {
            code: 201,
            message: "Resposta criada com sucesso.",
            data: reply
        };
    }

    public async listByTweet(idTweetPai: string) {
        const tweetPai = await repository.findTweetById(idTweetPai);

        if (!tweetPai) {
            return {
                code: 404,
                message: "Tweet original não encontrado."
            };
        }

        const replies = await repository.findRepliesByTweetId(idTweetPai);

        return {
            code: 200,
            message: "Respostas listadas com sucesso.",
            data: replies
        };
    }
}

export const replyService = new ReplyService();