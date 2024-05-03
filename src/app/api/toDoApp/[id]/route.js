import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


export async function DELETE(request, { params }) {
  const id = params.id;
  if (!id) {
    return NextResponse.error("Missing 'id' parameter");
  }

  const deleteTask = await prisma.task.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json(deleteTask, {
    success: 1,
    message: "Delete success",
  });
}