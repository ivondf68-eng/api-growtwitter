import { ChaveCompostaFollowDTO, CreateFollowDTO } from "../dtos/follow.dto";
import { ChaveCompostaLikeDTO, CreateLikeDTO } from "../dtos/like.dto";
import { CreateTweetDTO, UpdateTweetDTO } from "../dtos/tweet.dto";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto";
declare class GrowTwitterRepository {
    createUser(data: CreateUserDTO): Promise<{
        idUser: string;
        nome: string;
        email: string;
        senha: string;
        img: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }>;
    listUsers(): Promise<{
        idUser: string;
        nome: string;
        email: string;
        senha: string;
        img: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }[]>;
    findUserById(idUser: string): Promise<{
        idUser: string;
        nome: string;
        email: string;
        senha: string;
        img: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    } | null>;
    updateUser(idUser: string, data: UpdateUserDTO): Promise<{
        idUser: string;
        nome: string;
        email: string;
        senha: string;
        img: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }>;
    deleteUser(idUser: string): Promise<{
        idUser: string;
        nome: string;
        email: string;
        senha: string;
        img: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    }>;
    findUserByEmail(email: string): Promise<{
        idUser: string;
        nome: string;
        email: string;
        senha: string;
        img: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
    } | null>;
    createTweet(data: CreateTweetDTO): Promise<{
        idUser: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        idTweet: string;
        mensagem: string;
        idTweetPai: string | null;
    }>;
    listTweets(): Promise<({
        replies: {
            idUser: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
            idTweet: string;
            mensagem: string;
            idTweetPai: string | null;
        }[];
    } & {
        idUser: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        idTweet: string;
        mensagem: string;
        idTweetPai: string | null;
    })[]>;
    findTweetById(idTweet: string): Promise<{
        idUser: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        idTweet: string;
        mensagem: string;
        idTweetPai: string | null;
    } | null>;
    updateTweet(idTweet: string, data: UpdateTweetDTO): Promise<{
        idUser: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        idTweet: string;
        mensagem: string;
        idTweetPai: string | null;
    }>;
    deleteTweet(idTweet: string): Promise<{
        idUser: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        idTweet: string;
        mensagem: string;
        idTweetPai: string | null;
    }>;
    createLike(data: CreateLikeDTO): Promise<{
        idUser: string;
        dtCriacao: Date;
        idTweet: string;
    }>;
    findLike(data: ChaveCompostaLikeDTO): Promise<{
        idUser: string;
        dtCriacao: Date;
        idTweet: string;
    } | null>;
    deleteLike(data: ChaveCompostaLikeDTO): Promise<{
        idUser: string;
        dtCriacao: Date;
        idTweet: string;
    }>;
    createFollow(data: CreateFollowDTO): Promise<{
        dtCriacao: Date;
        idSeguidor: string;
        idSeguido: string;
    }>;
    findFollow(data: ChaveCompostaFollowDTO): Promise<{
        dtCriacao: Date;
        idSeguidor: string;
        idSeguido: string;
    } | null>;
    deleteFollow(data: ChaveCompostaFollowDTO): Promise<{
        dtCriacao: Date;
        idSeguidor: string;
        idSeguido: string;
    }>;
    findRepliesByTweetId(idTweetPai: string): Promise<{
        idUser: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        idTweet: string;
        mensagem: string;
        idTweetPai: string | null;
    }[]>;
    listFeed(idUser: string): Promise<({
        replies: {
            idUser: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
            idTweet: string;
            mensagem: string;
            idTweetPai: string | null;
        }[];
    } & {
        idUser: string;
        dtCriacao: Date;
        dtAtualizacao: Date;
        idTweet: string;
        mensagem: string;
        idTweetPai: string | null;
    })[]>;
}
export declare const repository: GrowTwitterRepository;
export {};
//# sourceMappingURL=prisma.database.d.ts.map