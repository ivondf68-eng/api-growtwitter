export interface CreateTweetDTO {
    mensagem: string;
    idUser: string;
    idTweetPai?: string;
}

export interface UpdateTweetDTO {
    mensagem?: string;
}