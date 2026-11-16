-- CreateTable
CREATE TABLE "user" (
    "id_user" TEXT NOT NULL,
    "nome" VARCHAR(120) NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "tweet" (
    "id_tweet " TEXT NOT NULL,
    "mensagem" VARCHAR(350) NOT NULL,
    "like" BOOLEAN NOT NULL DEFAULT false,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tweet_pkey" PRIMARY KEY ("id_tweet ")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
