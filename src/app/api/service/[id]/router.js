import dbConnect, { dbName } from "@/app/lib/DbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const GET = async (req, params) => {
  const param = await params;
  const servicesCollection = await dbConnect(dbName.servicesCollection);
  const service = await servicesCollection.findOne({
    _id: new ObjectId(param.id),
  });
  return NextResponse.json(service);
};
export default GET;
