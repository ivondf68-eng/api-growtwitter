import { repository } from "../database/prisma.database";
import { ChaveCompostaLikeDTO, CreateLikeDTO } from "../dtos/like.dto";


class LikeService {
    public async create(data: CreateLikeDTO) {
        const user = await repository.findUserById(data.idUser);

        if (!user) {
            return { 
                code: 404, 
                message: "Usuário não encontrado." 
            };
        }

        const tweet = await repository.findTweetById(data.idTweet);

        if (!tweet) {
            return { 
                code: 404, 
                message: "Tweet não encontrado." 
            };
        }

        const likeExistente = await repository.findLike(data);

        if (likeExistente) {
            return { 
                code: 400, 
                message: "Você já curtiu este Tweet." 
            };
        }

        const like = await repository.createLike(data);

        return {
            code: 201,
            message: "Tweet curtido com sucesso.",
            data: like
        };
    }

    public async delete(data: ChaveCompostaLikeDTO) {
        const user = await repository.findUserById(data.idUser);

        if (!user) {
            return { 
                code: 404, 
                message: "Usuário não encontrado." 
            };
        }

        const tweet = await repository.findTweetById(data.idTweet);

        if (!tweet) {
            return { 
                code: 404, 
                message: "Tweet não encontrado." 
            };
        }

        const likeExistente = await repository.findLike(data);

        if (!likeExistente) {
            return { 
                code: 404, 
                message: "Like não encontrado." 
            };
        }

        const like = await repository.deleteLike(data);

        return {
            code: 200,
            message: "Like removido com sucesso.",
            data: like
        };
    }

}