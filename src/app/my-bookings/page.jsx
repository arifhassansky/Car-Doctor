import { headers } from "next/headers";
import MyBookingTable from "../components/table/MyBookingTable";

const fetchMyBookings = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: await headers(),
  });
  const data = await res.json();
  return data;
};

const MyBookings = async () => {
  const bookings = await fetchMyBookings();

  return (
    <div>
      <h3 className="text-center font-bold text-4xl my-12">My Bookings</h3>
      <MyBookingTable bookings={bookings} />
    </div>
  );
};

export default MyBookings;
