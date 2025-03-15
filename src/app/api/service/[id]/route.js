import dbConnect, { dbName } from "@/lib/DbConnect";
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {
  const param = await params;

  const servicesCollection = await dbConnect(dbName.servicesCollection);
  const service = await servicesCollection.findOne({
    _id: new ObjectId(param.id),
  });
  return Response.json(service);
};
