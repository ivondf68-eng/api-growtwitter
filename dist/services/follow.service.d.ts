import { ChaveCompostaFollowDTO, CreateFollowDTO } from "../dtos/follow.dto";
declare class FollowService {
    create(data: CreateFollowDTO): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            dtCriacao: Date;
            idSeguidor: string;
            idSeguido: string;
        };
    }>;
    delete(data: ChaveCompostaFollowDTO): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            dtCriacao: Date;
            idSeguidor: string;
            idSeguido: string;
        };
    }>;
}
export declare const followService: FollowService;
export {};
//# sourceMappingURL=follow.service.d.ts.map