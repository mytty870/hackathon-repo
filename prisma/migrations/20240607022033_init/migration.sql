-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "userName" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "industry" TEXT,
    "businessType" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "summary" TEXT,
    "totalScore" INTEGER,
    "industry" TEXT,
    "businessType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "question1InputText" TEXT,
    "question1Evaluation1Score" INTEGER,
    "question1Evaluation1Reason" TEXT,
    "question1Evaluation2Score" INTEGER,
    "question1Evaluation2Reason" TEXT,
    "question1Evaluation3Score" INTEGER,
    "question1Evaluation3Reason" TEXT,
    "question1Evaluation4Score" INTEGER,
    "question1Evaluation4Reason" TEXT,
    "question1Evaluation5Score" INTEGER,
    "question1Evaluation5Reason" TEXT,
    "question2InputText" TEXT,
    "question2Evaluation1Score" INTEGER,
    "question2Evaluation1Reason" TEXT,
    "question2Evaluation2Score" INTEGER,
    "question2Evaluation2Reason" TEXT,
    "question2Evaluation3Score" INTEGER,
    "question2Evaluation3Reason" TEXT,
    "question2Evaluation4Score" INTEGER,
    "question2Evaluation4Reason" TEXT,
    "question2Evaluation5Score" INTEGER,
    "question2Evaluation5Reason" TEXT,
    "question3InputText" TEXT,
    "question3Evaluation1Score" INTEGER,
    "question3Evaluation1Reason" TEXT,
    "question3Evaluation2Score" INTEGER,
    "question3Evaluation2Reason" TEXT,
    "question3Evaluation3Score" INTEGER,
    "question3Evaluation3Reason" TEXT,
    "question3Evaluation4Score" INTEGER,
    "question3Evaluation4Reason" TEXT,
    "question3Evaluation5Score" INTEGER,
    "question3Evaluation5Reason" TEXT,
    "question4InputText" TEXT,
    "question4Evaluation1Score" INTEGER,
    "question4Evaluation1Reason" TEXT,
    "question4Evaluation2Score" INTEGER,
    "question4Evaluation2Reason" TEXT,
    "question4Evaluation3Score" INTEGER,
    "question4Evaluation3Reason" TEXT,
    "question4Evaluation4Score" INTEGER,
    "question4Evaluation4Reason" TEXT,
    "question4Evaluation5Score" INTEGER,
    "question4Evaluation5Reason" TEXT,
    "question5InputText" TEXT,
    "question5Evaluation1Score" INTEGER,
    "question5Evaluation1Reason" TEXT,
    "question5Evaluation2Score" INTEGER,
    "question5Evaluation2Reason" TEXT,
    "question5Evaluation3Score" INTEGER,
    "question5Evaluation3Reason" TEXT,
    "question5Evaluation4Score" INTEGER,
    "question5Evaluation4Reason" TEXT,
    "question5Evaluation5Score" INTEGER,
    "question5Evaluation5Reason" TEXT,

    CONSTRAINT "InterviewSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_key" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewSession" ADD CONSTRAINT "InterviewSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
