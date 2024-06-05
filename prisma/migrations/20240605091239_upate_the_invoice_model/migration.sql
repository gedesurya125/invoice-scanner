/*
  Warnings:

  - Added the required column `currency` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documentType` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "documentType" TEXT NOT NULL,
ADD COLUMN     "totalPrice" INTEGER NOT NULL;
