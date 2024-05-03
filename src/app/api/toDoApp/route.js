import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function POST(req) {
  const data = await req.json();

  const result = await prisma.task.create({
    data: data,
  });
  return NextResponse.json(result);
}

export async function GET() {
  const alltasks = await prisma.task.findMany();
  return NextResponse.json(alltasks);
}
