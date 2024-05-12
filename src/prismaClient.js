import { PrismaClient } from "@prisma/client"

console.log("*** Setting up prismaClient")



export const prisma =  new PrismaClient()



export default prisma
