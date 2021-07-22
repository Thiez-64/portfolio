/*
  Warnings:

  - Added the required column `logo` to the `Interest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Language` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Interest" ADD COLUMN     "logo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "logo" TEXT NOT NULL;
