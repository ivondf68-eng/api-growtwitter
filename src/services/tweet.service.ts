import { repository } from "../database/prisma.database";
import { CreateTweetDTO, UpdateTweetDTO } from "../dtos/tweet.dto";


class TweetService {
    public async create(data: CreateTweetDTO){
        const user = await repository.findUserById(data.idUser);

        if(!user) {
            return {
                code: 404,
                message: "Usuário não encontrado."
            };
        }

        if(!data.mensagem.trim()){
            return {
                code: 400,
                message: "É obrigatório enviar a mensagem"
            }
        }

        const tweet = await repository.createTweet(data);

        return {
            code: 201,
            message: "Tweet criado com sucesso",
            data: tweet
        }
    }

    public async list() {
        const tweets = await repository.listTweets();

        if(!tweets.length){
            return {
                code: 200,
                message: "Ainda não há tweets"
            }
        }

        return {
            code: 200,
            data: tweets
        }
    }

    public async findById(idTweet: string) {
        const tweet = await repository.findTweetById(idTweet);

        if (!tweet) {
            return {
                code: 404,
                message: "Tweet não encontrado.",
            }
        }

        return {
            code: 200,
            data: tweet
        }
    }

    public async update(idTweet: string, idUser: string, data: UpdateTweetDTO) {
        const tweet = await repository.findTweetById(idTweet);

        if (!tweet) {
            return {
                code: 404,
                message: "Tweet não encontrado.",
            }
        }

        if(tweet.idUser !== idUser){
            return {
                code: 400,
                message: "Você não tem permissão para editar este Tweet."
            }
        }

        if(data.mensagem !== undefined && !data.mensagem.trim()){
            return {
                code: 400,
                message: "A mensagem do Tweet não pode ser vazia."
            }
        }

        const tweetAtualizado = await repository.updateTweet(idTweet, data);

        return {
            code: 200,
            message: "Tweet atualizado com sucesso",
            data: tweetAtualizado
        };
    }

    public async delete(idTweet: string, idUser: string) {
        const tweet = await repository.findTweetById(idTweet);

        if (!tweet) {
            return {
                code: 404,
                message: "Tweet não encontrado.",
            }
        }

        if(tweet.idUser !== idUser){
            return {
                code: 400,
                message: "Você não tem permissão para excluir este Tweet."
            }
        }

        const deletedTweet = await repository.deleteTweet(idTweet);

        return {
            code: 200,
            message: "Tweet excluído com sucesso",
            data: deletedTweet
        }
    }
}

export const tweetService = new TweetService();
