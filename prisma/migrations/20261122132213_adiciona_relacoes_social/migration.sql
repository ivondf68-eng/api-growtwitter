/*
  Warnings:

  - You are about to drop the column `dt_atualizacao` on the `retweet` table. All the data in the column will be lost.
  - You are about to drop the column `like` on the `retweet` table. All the data in the column will be lost.
  - You are about to drop the column `mensagem` on the `retweet` table. All the data in the column will be lost.
  - You are about to drop the column `like` on the `tweet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_user,id_tweet]` on the table `retweet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "retweet" DROP COLUMN "dt_atualizacao",
DROP COLUMN "like",
DROP COLUMN "mensagem";

-- AlterTable
ALTER TABLE "tweet" DROP COLUMN "like",
ADD COLUMN     "id_tweet_pai" TEXT;

-- CreateTable
CREATE TABLE "like" (
    "id_user" TEXT NOT NULL,
    "id_tweet" TEXT NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "like_pkey" PRIMARY KEY ("id_user","id_tweet")
);

-- CreateTable
CREATE TABLE "follow" (
    "id_seguidor" TEXT NOT NULL,
    "id_seguido" TEXT NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "follow_pkey" PRIMARY KEY ("id_seguidor","id_seguido")
);

-- CreateIndex
CREATE UNIQUE INDEX "retweet_id_user_id_tweet_key" ON "retweet"("id_user", "id_tweet");

-- AddForeignKey
ALTER TABLE "tweet" ADD CONSTRAINT "tweet_id_tweet_pai_fkey" FOREIGN KEY ("id_tweet_pai") REFERENCES "tweet"("id_tweet") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like" ADD CONSTRAINT "like_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like" ADD CONSTRAINT "like_id_tweet_fkey" FOREIGN KEY ("id_tweet") REFERENCES "tweet"("id_tweet") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_id_seguidor_fkey" FOREIGN KEY ("id_seguidor") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_id_seguido_fkey" FOREIGN KEY ("id_seguido") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
