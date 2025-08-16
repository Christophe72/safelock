// filepath: c:\Projet-raspberry-esp32\safelock\src\app\api\test-db\route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    await prisma.$connect();
    return NextResponse.json({
      status: "ok",
      message: "Connexion réussie à la BDD",
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: String(error) },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
