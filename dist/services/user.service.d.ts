import { LoginDTO } from "../dtos/login.dto";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto";
declare class UserService {
    create(data: CreateUserDTO): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            idUser: string;
            nome: string;
            email: string;
            senha: string;
            img: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
        };
    }>;
    list(): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            idUser: string;
            nome: string;
            email: string;
            senha: string;
            img: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
        }[];
    }>;
    findById(idUser: string): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            idUser: string;
            nome: string;
            email: string;
            senha: string;
            img: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
        };
    }>;
    updateUser(idUser: string, data: UpdateUserDTO): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            idUser: string;
            nome: string;
            email: string;
            senha: string;
            img: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
        };
    }>;
    deleteUser(idUser: string): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            idUser: string;
            nome: string;
            email: string;
            senha: string;
            img: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
        };
    }>;
    login(data: LoginDTO): Promise<{
        code: number;
        message: string;
        data?: never;
    } | {
        code: number;
        message: string;
        data: {
            login: `${string}-${string}-${string}-${string}-${string}`;
            idUser: string;
            nome: string;
            email: string;
            img: string;
            dtCriacao: Date;
            dtAtualizacao: Date;
        };
    }>;
}
export declare const userService: UserService;
export {};
//# sourceMappingURL=user.service.d.ts.map