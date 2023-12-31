const { PrismaClient } = require("@prisma/client");

const globalForPrisma = {prisma: PrismaClient};

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        logL: ["query"],
    });

if (process.env.NODE_ENV != "production") globalForPrisma.prisma;