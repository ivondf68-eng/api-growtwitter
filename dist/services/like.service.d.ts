import { ChaveCompostaLikeDTO, CreateLikeDTO } from "../dtos/like.dto";
declare class LikeService {
    create(data: CreateLikeDTO): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            idUser: string;
            dtCriacao: Date;
            idTweet: string;
        };
    }>;
    delete(data: ChaveCompostaLikeDTO): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            idUser: string;
            dtCriacao: Date;
            idTweet: string;
        };
    }>;
}
export declare const likeService: LikeService;
export {};
//# sourceMappingURL=like.service.d.ts.map