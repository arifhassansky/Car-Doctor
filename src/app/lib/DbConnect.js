import { MongoClient, ServerApiVersion } from "mongodb";

export const dbName = {
  servicesCollection: "Services",
  usersCollection: "users",
};

export default async function dbConnect(collection) {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.koweo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    console.log("connected to mongodb");
    return client.db("Car_Doctor").collection(collection);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw new Error("Database connection failed");
  }
}
