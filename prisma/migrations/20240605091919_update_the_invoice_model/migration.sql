-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "language" TEXT,
ALTER COLUMN "invoiceDate" DROP NOT NULL,
ALTER COLUMN "currency" DROP NOT NULL,
ALTER COLUMN "documentType" DROP NOT NULL,
ALTER COLUMN "totalPrice" DROP NOT NULL;
