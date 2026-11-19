
import { prisma } from "../config/prisma.config";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto";

class GrowTwitterRepository {
    public async createUser(data: CreateUserDTO){
        return await prisma.user.create({
            data
        })
    }

    public async listUsers(){
        return await prisma.user.findMany();
    }

    public async findUserById(idUser: string){
        return await prisma.user.findUnique({
            where: {
                idUser
            }
        });
    }

    public async updateUser(idUser: string, data: UpdateUserDTO){
        return await prisma.user.update({
            where: {
                idUser
            },
            data
        })
    }

    public async deleteUser(idUser: string){
        return await prisma.user.delete({
            where: {
                idUser
            }
        })
    }

}

export default new GrowTwitterRepository();
