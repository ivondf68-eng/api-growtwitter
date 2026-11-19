import { repository } from "../database/prisma.database";
import { CreateUserDTO } from "../dtos/user.dto";

class UserService{
    public async create(data: CreateUserDTO){
        const user = await repository.findUserByEmail(data.email);

        if(user){
            return{
                code: 400,
                message: "O e-mail já está cadastrado"
            }
        }

        const newUser = await repository.createUser(data);

        return{
            code: 201,
            message: "Usuário cadastrado com sucesso",
            data: newUser
        }
    }

    public async list(){
        const users = await repository.listUsers();

        return{
            code: 200,
            message: "Usuários listados com sucesso",
            data: users
        }
    }

    public async findById(idUser: string){
        const user = await repository.findUserById(idUser);

        return{
            code: 200,
            message: "Usuário encontrado",
            data: user
        }
    }
}

export const userService = new UserService();