import { authOptions } from "@/lib/authOptions";
import dbConnect, { dbName } from "@/lib/DbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);

  if (session) {
    console.log("session:", session);
    const email = session?.user?.email;

    const bookingsCollection = await dbConnect(dbName.bookingsCollection);
    const result = await bookingsCollection.find({ email }).toArray();
    return NextResponse.json(result);
  }
  return NextResponse.json([]);
};

export const POST = async (req) => {
  const body = await req.json();

  const bookingsCollection = await dbConnect(dbName.bookingsCollection);
  const result = await bookingsCollection.insertOne(body);

  return NextResponse.json(result);
};
