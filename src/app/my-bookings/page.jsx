"use client";
import { useEffect, useState } from "react";
import MyBookingTable from "../components/table/MyBookingTable";
import { useSession } from "next-auth/react";
import { classify } from "i/lib/methods";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    const fetchMyBookings = async () => {
      const res = await fetch("http://localhost:3000/api/service");
      const data = await res.json();
      setBookings(data);
    };
    fetchMyBookings();
  }, []);

  return (
    <div>
      <h3 className="text-center font-bold text-4xl my-12">My Bookings</h3>
      <MyBookingTable bookings={bookings} />
    </div>
  );
};

export default MyBookings;
