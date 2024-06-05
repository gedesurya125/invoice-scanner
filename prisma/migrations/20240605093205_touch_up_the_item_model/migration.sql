/*
  Warnings:

  - You are about to drop the column `ammount` on the `Item` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "ammount",
ADD COLUMN     "amount" INTEGER NOT NULL;
