import { PrismaClient } from "@prisma/client";

// For TypeScript compatibility
const globalThis: any = global;

// PrismaClient is attached to the `globalThis` object in development to prevent
// exhausting your database connection limit.
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

export default prisma;
