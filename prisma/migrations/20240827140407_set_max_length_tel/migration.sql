/*
  Warnings:

  - You are about to alter the column `tel` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "tel" SET DATA TYPE VARCHAR(11);
