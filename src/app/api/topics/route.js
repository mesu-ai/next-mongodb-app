import connectMongo from "@/lib/connectMongo";
import Topics from "@/models/topicsSchema";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongo();
  const topics = await Topics.find();
  return NextResponse.json({ topics });
}

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongo();
  await Topics.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 200 });
}