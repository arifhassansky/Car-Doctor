"use client";

const CheckoutForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Confirmed:");
  };

  return (
    <div className="w-10/12 mx-auto bg-[#F3F3F3] p-24">
      <div className="p-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 "
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="p-3 border rounded-lg w-full bg-white"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="p-3 border rounded-lg w-full bg-white"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="p-3 border rounded-lg w-full bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg w-full bg-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 border rounded-lg w-full col-span-1 md:col-span-2 bg-white"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-red-500 text-white font-semibold p-3 rounded-lg hover:bg-red-600"
          >
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
