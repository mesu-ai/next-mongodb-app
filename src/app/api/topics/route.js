import connectMongo from "@/lib/connectMongo";
import Topics from "@/models/topicsSchema";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongo();
  const topics = await Topics.find();
  return NextResponse.json({ topics });
}