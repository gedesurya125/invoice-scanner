/*
  Warnings:

  - You are about to drop the column `amount` on the `Item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "amount",
ADD COLUMN     "name" TEXT,
ADD COLUMN     "quantity" INTEGER;
