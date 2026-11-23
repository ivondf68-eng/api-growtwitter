import { CreateTweetDTO, UpdateTweetDTO } from "../dtos/tweet.dto";
declare class TweetService {
    create(data: CreateTweetDTO): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            idUser: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
            idTweet: string;
            mensagem: string;
            idTweetPai: string | null;
        };
    }>;
    list(): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        data: ({
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
        })[];
        message?: never;
    }>;
    findById(idTweet: string): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        data: {
            idUser: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
            idTweet: string;
            mensagem: string;
            idTweetPai: string | null;
        };
        message?: never;
    }>;
    update(idTweet: string, idUser: string, data: UpdateTweetDTO): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            idUser: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
            idTweet: string;
            mensagem: string;
            idTweetPai: string | null;
        };
    }>;
    delete(idTweet: string, idUser: string): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            idUser: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
            idTweet: string;
            mensagem: string;
            idTweetPai: string | null;
        };
    }>;
}
export declare const tweetService: TweetService;
export {};
//# sourceMappingURL=tweet.service.d.ts.map