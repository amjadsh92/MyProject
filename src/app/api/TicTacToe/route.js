import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function POST(req) {
  const data = await req.json();
  console.log('data', data)

  const result = await prisma.hit.create({
    data: data,
  });
  return NextResponse.json(result);
}

export async function GET() {
  const allhits = await prisma.hit.findMany();
  return NextResponse.json(allhits);
}
