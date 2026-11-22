import { repository } from "../database/prisma.database";
import { CreateFollowDTO } from "../dtos/follow.dto";


class FollowService {
    public async create(data: CreateFollowDTO){
        const seguidor = await repository.findUserById(data.idSeguidor);

        if(!seguidor){
            return {
                code: 404,
                message: "Seguidor não encontrado"
            }
        }

        const seguido = await repository.findUserById(data.idSeguido);

        if(!seguido){
            return {
                code: 404,
                message: "usuário a ser seguido não foi encontrado"
            }
        }

        if(seguidor.idUser === seguido.idUser){
            return {
                code: 400,
                message: "Não é possível seguir a si mesmo"
            }
        }

        const followExistente = await repository.findFollow(data);

        if(followExistente){
            return {
                code: 400,
                message: "Você já segue este usuário"
            }
        }

        const follow = await repository.createFollow(data);

        return {
            code: 201,
            message: "Usuário seguido com sucesso",
            data: follow
        }
    }
}