/*
  Warnings:

  - You are about to drop the column `id_retweet` on the `tweet` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `tweet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tweet" DROP CONSTRAINT "tweet_id_retweet_fkey";

-- AlterTable
ALTER TABLE "tweet" DROP COLUMN "id_retweet",
ADD COLUMN     "id_user" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "retweet" (
    "id_retweet" TEXT NOT NULL,
    "mensagem" VARCHAR(350) NOT NULL,
    "like" BOOLEAN NOT NULL DEFAULT false,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_tweet" TEXT NOT NULL,

    CONSTRAINT "retweet_pkey" PRIMARY KEY ("id_retweet")
);

-- AddForeignKey
ALTER TABLE "tweet" ADD CONSTRAINT "tweet_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retweet" ADD CONSTRAINT "retweet_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retweet" ADD CONSTRAINT "retweet_id_tweet_fkey" FOREIGN KEY ("id_tweet") REFERENCES "tweet"("id_tweet") ON DELETE RESTRICT ON UPDATE CASCADE;
