import prisma from './prisma';
import type { PrismaClient } from '@prisma/client';

export async function runQuery(
  callback?: (prisma: PrismaClient) => Promise<any>
) {
  // ... you will write your Prisma Client queries here

  return callback ? await callback(prisma) : null;
}

runQuery()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
