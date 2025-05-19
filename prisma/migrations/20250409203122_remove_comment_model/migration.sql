/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "KitchenType" ADD VALUE 'RUSSIAN';
ALTER TYPE "KitchenType" ADD VALUE 'CHINESE';
ALTER TYPE "KitchenType" ADD VALUE 'PORTUGUESE';
ALTER TYPE "KitchenType" ADD VALUE 'HUNGARIAN';
ALTER TYPE "KitchenType" ADD VALUE 'ITALIAN';
ALTER TYPE "KitchenType" ADD VALUE 'SPANISH';

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_recipeReviewId_fkey";

-- AlterTable
ALTER TABLE "RecipeReview" ADD COLUMN     "comment" TEXT;

-- DropTable
DROP TABLE "Comment";
