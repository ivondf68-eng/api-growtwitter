import { repository } from "../database/prisma.database";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto";

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

    public async updateUser(idUser: string, data: UpdateUserDTO){
        const user = await repository.findUserById(idUser);

        if(!user){
            return {
                code: 404,
                message: "Usuário não encontrado"
            }
        }

        const updatedUser = await repository.updateUser(idUser, data);

        return {
            code: 200,
            message: "Usuário atualizado com sucesso",
            data: updatedUser
        }
    }

    public async deleteUser(idUser: string){
        const user = await repository.deleteUser(idUser);

        if(!user){
            return {
                code: 404,
                message: "Usuário não encontrado"
            }
        }

        const deletedUser = await repository.deleteUser(idUser);

        return {
            code: 200,
            message: "Usuário deletado com sucesso",
            data: deletedUser
        }
    }
}

export const userService = new UserService();