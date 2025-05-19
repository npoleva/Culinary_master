/*
  Warnings:

  - A unique constraint covering the columns `[userId,recipeId]` on the table `RecipeReview` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RecipeReview_userId_recipeId_key" ON "RecipeReview"("userId", "recipeId");
