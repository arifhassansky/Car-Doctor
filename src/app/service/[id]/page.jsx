import dbConnect, { dbnName } from "@/app/lib/DbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const ServiceDetails = async ({ params }) => {
  const param = await params;
  const servicesCollection = await dbConnect(dbnName.servicesCollection);
  const service = await servicesCollection.findOne({
    _id: new ObjectId(param.id),
  });

  return (
    <div className="w-10/12 mx-auto mt-12">
      {/* details banner */}
      <section className="relative ">
        <div className="relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            className="object-cover rounded-lg w-full"
            width={1137}
            height={300}
            alt={"banner"}
          />
          <div className="absolute bg-black/30 inset-0 bg-opacity-50 flex items-center pl-8 rounded-lg">
            <h1 className="text-white text-5xl font-semibold">
              Service Details
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md">
          <span className="text-sm">Home / Service Details</span>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
