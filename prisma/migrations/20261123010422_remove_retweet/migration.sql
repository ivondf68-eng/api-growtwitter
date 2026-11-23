/*
  Warnings:

  - You are about to drop the `retweet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "retweet" DROP CONSTRAINT "retweet_id_tweet_fkey";

-- DropForeignKey
ALTER TABLE "retweet" DROP CONSTRAINT "retweet_id_user_fkey";

-- DropTable
DROP TABLE "retweet";
