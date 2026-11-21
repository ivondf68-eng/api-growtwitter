export interface CreateTweetDTO {
    mensagem: string;
    idUser: string;
}

export interface UpdateTweetDTO {
    mensagem?: string;
}