/*
  Warnings:

  - You are about to drop the column `invoiceData` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `invoiceDate` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "invoiceData",
ADD COLUMN     "invoiceDate" TIMESTAMP(3) NOT NULL;
