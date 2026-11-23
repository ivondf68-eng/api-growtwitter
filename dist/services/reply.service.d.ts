import { CreateTweetDTO } from './../dtos/tweet.dto';
declare class ReplyService {
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
    listByTweet(idTweetPai: string): Promise<{
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
        }[];
    }>;
}
export declare const replyService: ReplyService;
export {};
//# sourceMappingURL=reply.service.d.ts.map