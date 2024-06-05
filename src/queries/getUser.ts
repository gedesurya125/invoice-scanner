'use server';

import prisma from 'utils/prisma';

export const getUserList = async () => {
  const data = await prisma.user.findMany();
  return data;
};
