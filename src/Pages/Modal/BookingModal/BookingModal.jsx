import React from "react";
// import toast from "react-hot-toast";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../context/AuthProvider";

const BookingModal = ({ bikeinfo, refetch }) => {
//   const { user } = useContext(AuthContext);
  const handleBookingModal =e=>{
    e.preventDefault();
    console.log('Eimon')
  }
//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   const handleBookingModal = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.username.value;
//     const email = user?.email;
//     const product_name = form.name.value;
//     const price = form.sellingPrice.value;
//     const mobile = form.mobile.value;
//     const location = form.location.value;
//     console.log(name, price, email, product_name, mobile, location);

//     const booking = {
//       name,
//       email,
//       product_name,
//       price,
//       location,
//       mobile,
//     };
//     fetch("https://server-nine-plum.vercel.app/bookings", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(booking),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log("save user ", data);
//         // navigate("/dashboard");
//         // setCreateUserEmail(email);
//         toast("booked successed");
//         form.reset();
//         refetch();
//       });
//   };

  return (
    <>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* <h3 className="text-xl font-bold">{user?.name}</h3> */}
          <form
            onSubmit={handleBookingModal}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              disabled
              
              name="username"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              disabled
              
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              disabled
              
              name="name"
              type="text"
              placeholder="Name"
              className="input w-full input-bordered"
            />
            <input
              disabled
             
              name="sellingPrice"
              type="text"
              placeholder="SellingPrice"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
            />
            <input
              name="mobile"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className=" hover:text-gray-100 px-8 rounded py-3 text-bold hover:bg-green-600 bg-blue-800 text-white w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
