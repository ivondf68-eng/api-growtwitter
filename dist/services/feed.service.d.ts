declare class FeedService {
    list(idUser: string): Promise<{
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
}
export declare const feedService: FeedService;
export {};
//# sourceMappingURL=feed.service.d.ts.map