import UpdateBookingForm from "@/componenets/UpdateBookingForm";
import { headers } from "next/headers";

const UpdateBookingPage = async ({ params }) => {
  const param = await params;
  const res = await fetch(`http://localhost:3000/api/my-bookings/${param.id}`, {
    headers: await headers(),
  });
  const data = await res.json();

  return (
    <div>
      <UpdateBookingForm service={data} />
    </div>
  );
};

export default UpdateBookingPage;
