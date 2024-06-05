'use server';
import prisma from 'utils/prisma';

export const getInvoices = async () => {
  const data = await prisma.invoice.findMany({
    include: {
      items: true
    }
  });
  return data;
};
