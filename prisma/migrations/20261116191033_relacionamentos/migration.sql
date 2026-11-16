/*
  Warnings:

  - The primary key for the `tweet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_tweet ` on the `tweet` table. All the data in the column will be lost.
  - The required column `id_tweet` was added to the `tweet` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "tweet" DROP CONSTRAINT "tweet_pkey",
DROP COLUMN "id_tweet ",
ADD COLUMN     "id_retweet" TEXT,
ADD COLUMN     "id_tweet" TEXT NOT NULL,
ADD CONSTRAINT "tweet_pkey" PRIMARY KEY ("id_tweet");

-- AddForeignKey
ALTER TABLE "tweet" ADD CONSTRAINT "tweet_id_retweet_fkey" FOREIGN KEY ("id_retweet") REFERENCES "tweet"("id_tweet") ON DELETE SET NULL ON UPDATE CASCADE;
