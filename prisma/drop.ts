import prisma from '../src/utils/prisma';

async function main() {
  await prisma.user.deleteMany();
  await prisma.item.deleteMany();
  await prisma.invoice.deleteMany();
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
