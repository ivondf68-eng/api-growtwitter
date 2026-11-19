export interface CreateUserDTO {
    nome: string;
    email: string;
    senha: string;
    img: string;
}

export interface UpdateUserDTO {
    nome?: string;
    email?: string;
    senha?: string;
    img?: string;
}