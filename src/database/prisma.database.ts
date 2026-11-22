
import { prisma } from "../config/prisma.config";
import { ChaveCompostaLikeDTO, CreateLikeDTO } from "../dtos/like.dto";
import { CreateTweetDTO, UpdateTweetDTO } from "../dtos/tweet.dto";
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

    public async findUserByEmail(email: string){
        return await prisma.user.findUnique({
            where: {
                email
            }
        });
    }

    public async createTweet(data: CreateTweetDTO) {
        return await prisma.tweet.create({
            data
        });
    }

    public async listTweets() {
        return await prisma.tweet.findMany();
    }

    public async findTweetById(idTweet: string) {
        return await prisma.tweet.findUnique({
            where: {
                idTweet
            }
        });
    }

    public async updateTweet(idTweet: string, data: UpdateTweetDTO) {
        return await prisma.tweet.update({
            where: {
                idTweet
            },
            data
        });
    }

    public async deleteTweet(idTweet: string) {
        return await prisma.tweet.delete({
            where: {
                idTweet
            }
        });
    }

    public async createLike(data: CreateLikeDTO){
        return await prisma.like.create({
            data
        });
    }

    public async findLike(data: ChaveCompostaLikeDTO) {
        return await prisma.like.findUnique({
            where: {
                idUser_idTweet: data
            }
        });
    }

    public async deleteLike(data: ChaveCompostaLikeDTO) {
        return await prisma.like.delete({
            where: {
                idUser_idTweet: data
            }
        })
    }
}
    
export const repository = new GrowTwitterRepository();
