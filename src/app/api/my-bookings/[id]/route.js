import dbConnect, { dbName } from "@/lib/DbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const session = await getServerSession();
  const param = await params;
  const bookingsCollection = await dbConnect(dbName.bookingsCollection);
  const query = {
    _id: new ObjectId(param.id),
  };

  const booking = await bookingsCollection.findOne(query);
  const email = session?.user?.email;
  const isOwnerOk = email === booking.email;

  if (isOwnerOk) {
    return NextResponse.json(booking);
  }

  return NextResponse.json(
    { message: "Forbidden update access" },
    { status: 401 }
  );
};

export const PATCH = async (req, { params }) => {
  const session = await getServerSession();
  const param = await params;
  const bookingsCollection = await dbConnect(dbName.bookingsCollection);
  const body = await req.json();

  const query = { _id: new ObjectId(param.id) };
  const updatedDoc = { $set: { ...body } };
  const option = { upsert: true };

  const email = session?.user?.email;
  const singleBooking = await bookingsCollection.findOne(query);

  const isOwnerOk = email === singleBooking.email;

  if (isOwnerOk) {
    const booking = await bookingsCollection.updateOne(
      query,
      updatedDoc,
      option
    );
    revalidatePath("/my-bookings");
    return NextResponse.json(booking);
  }

  return NextResponse.json(
    { message: "Forbidden update access" },
    { status: 401 }
  );
};
