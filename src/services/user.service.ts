import { repository } from "../database/prisma.database";
import { CreateUserDTO } from "../dtos/user.dto";

class UserService{
    public async create(data: CreateUserDTO){
        const user = await repository.findUserByEmail(data.email);

        if(!user){
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
}

export const userService = new UserService();