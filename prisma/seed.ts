import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Surya',
      email: 'surya@gmai.com'
    }
  });
  await prisma.user.create({
    data: {
      name: 'Learn Prisma',
      email: 'gede@gmail.com'
    }
  });
  await prisma.user.create({
    data: {
      name: 'Pranata',
      email: 'suryauar@gmail.com'
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
