//initialize prisma client using which we can make calls to our DB

import { PrismaClient } from "@prisma/client";

//nextJS has hotreloading feature mean everytime we make changes in our code it will reload the server
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

//globalThis.prisma: This global variable ensures that the Prisma client instance is
//reused across hot reloads during development. Without this, each time your application
//reloads, a new instance of prisma client wud be created , potentially leading to connection issues
