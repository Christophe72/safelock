import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Câble enregistré :", data);

  // Enregistrement dans Prisma (table CableSelection à adapter selon votre schéma)
  // const saved = await prisma.cableSelection.create({
  //   data: {
  //     type: data.type,
  //     calibre: data.calibre,
  //     distance: data.distance,
  //     section: data.section,
  //     note: data.note,
  //   },
  // });

  // For now, just return success without database save
  return NextResponse.json({ success: true, data });
}
