import { authOptions } from "@/lib/authOptions";
import dbConnect, { dbName } from "@/lib/DbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const param = await params;
  const session = await getServerSession(authOptions);
  const bookingsCollection = await dbConnect(dbName.bookingsCollection);

  const query = {
    _id: new ObjectId(param.id),
  };

  const service = await bookingsCollection.findOne(query);
  const isOwnerOk = session?.user?.email === service?.email;

  if (isOwnerOk) {
    const result = await bookingsCollection.deleteOne(query);
    revalidatePath("/my-bookings");
    return NextResponse.json(result);
  }
  return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
};

// get a single service
export const GET = async (req, { params }) => {
  const param = await params;

  const servicesCollection = await dbConnect(dbName.servicesCollection);
  const service = await servicesCollection.findOne({
    _id: new ObjectId(param.id),
  });
  return NextResponse.json(service);
};
