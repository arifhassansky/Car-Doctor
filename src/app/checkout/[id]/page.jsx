import CheckoutForm from "@/componenets/CheckoutForm";
import axios from "axios";
import Image from "next/image";
import React from "react";

const CheckOutPage = async ({ params }) => {
  const param = await params;

  const { data: service } = await axios(
    `http://localhost:3000/api/service/${param.id}`
  );

  return (
    <div className="w-10/12 mx-auto mt-8">
      {/* Checkout Banner */}
      <section className="relative mb-20">
        <div className="relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            className="object-cover rounded-lg w-full"
            width={1137}
            height={300}
            alt={"banner"}
          />
          <div className="absolute bg-black/30 inset-0 bg-opacity-50 flex items-center pl-8 rounded-lg">
            <h1 className="text-white text-5xl font-semibold">Checkout</h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md">
          <span className="text-sm">Home / Checkout</span>
        </div>
      </section>

      <CheckoutForm service={service} />
    </div>
  );
};

export default CheckOutPage;
