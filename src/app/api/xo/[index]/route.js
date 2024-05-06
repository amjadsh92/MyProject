import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


export async function DELETE(request, { params }) {
  const index = params.index;
  console.log("index=", index)
  if (!index) {
    return NextResponse.error("Missing 'index' parameter");
  }

  
  

  
  const deleteHit = await prisma.hit.deleteMany({
    where: {
      index: {gt: parseInt(index)}
    },
  });
  
  


  return NextResponse.json(deleteHit, {
    success: 1,
    message: "Delete success",
  });
}


