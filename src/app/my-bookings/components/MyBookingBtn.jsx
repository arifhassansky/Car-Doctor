"use client";

import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

const MyBookingBtn = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    router.refresh();
  };

  return (
    <>
      <FaTrash onClick={() => handleDelete(id)} size={15} />
    </>
  );
};

export default MyBookingBtn;
