'use server';
import { ParsedInvoiceDocument } from 'types/invoiceParserResponse';
import prisma from 'utils/prisma';

export const createInvoice = async (
  parsedInvoiceDocument: ParsedInvoiceDocument
) => {
  await prisma.invoice.create({
    data: {
      invoiceDate: new Date(
        parsedInvoiceDocument.inference.prediction.date.value
      ),
      totalPrice: parsedInvoiceDocument.inference.prediction.total_amount.value,
      documentType:
        parsedInvoiceDocument.inference.prediction.document_type.value,
      currency: parsedInvoiceDocument.inference.prediction.locale.currency,
      language: parsedInvoiceDocument.inference.prediction.locale.language,
      items: {
        create: parsedInvoiceDocument.inference.prediction.line_items.map(
          (data) => {
            const getQuantity = () => {
              if (
                data?.total_amount &&
                data?.unit_price &&
                data?.total_amount > data?.unit_price
              ) {
                const calculatedQuantity = Math.round(
                  data.total_amount / data.unit_price
                );
                return calculatedQuantity;
              }
              return data?.quantity;
            };

            return {
              name: data.description,
              quantity: getQuantity(),
              unit: '',
              unitPrice: data.unit_price,
              totalPrice: data.total_amount,
              currency:
                parsedInvoiceDocument.inference.prediction.locale.currency
            };
          }
        )
      }
    }
  });
};

//? source to create record and nested records https://www.prisma.io/docs/orm/prisma-schema/data-model/relations
