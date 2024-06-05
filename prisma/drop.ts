import prisma from '../src/utils/prisma';

async function main() {
  await prisma.user.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.item.deleteMany();
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
