import Image from "next/image";
import { FaTrash } from "react-icons/fa";

const MyBookingTable = ({ bookings }) => {
  return (
    <div className="w-10/12 mx-auto mb-12">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td>
                  <Image
                    src={booking.service_img}
                    width={64}
                    height={80}
                    className=" rounded"
                    alt="service image"
                  />
                </td>
                <td>{booking.service_name}</td>
                <td>{booking.date}</td>
                <td>{booking.service_price}</td>
                <th className="text-red-500 pl-8">
                  <FaTrash size={15} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingTable;
