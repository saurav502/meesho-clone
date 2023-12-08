import "./payment.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/navbar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const products = useSelector((state) => state.cart);
  const allproductPrice = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  const navigate = useNavigate();

  const [card, setCard] = useState();
  const [cvv, setCvv] = useState();
  const [exDate, setExDate] = useState();
  const paymentHandler = (e) => {
    //   e.preventDefault();
    if (!card || !cvv || !exDate) {
      toast.error("Please fill all the payment details!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      navigate("/");
      toast.success("Congratulations! your order get placed.", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      document.location.reload();
    }
  };
  //   const OrdertoPay = object.cart.reduce((T, C, I) => {
  //     return T + C.price;
  //   }, 0);
  return (
    <div>
      {" "}
      <NavBar />
      <div className="text-center text-2xl font-medium">
        <h1 className="Proceed">Proceed Your Payment</h1>
      </div>
      <div className="flex max-w-5xl m-auto mt-4 mb-4 gap-4">
        <div className="border border-gray-300 rounded-lg max-w-xl w-2/3">
          <div className=" bg-gray-200 rounded-t-lg text-center text-2xl font-medium p-3">
            <h1>Basic Information</h1>
          </div>
          <form action="" className="border gap-4 p-4 grid grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                First Name
              </label>
              <input type="text" name="" className="border p-1 rounded-md" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                Last Name
              </label>
              <input type="text" name="" className="border p-1 rounded-md" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                Phone Number
              </label>
              <input type="text" name="" className="border p-1 rounded-md" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                Email Address
              </label>
              <input type="text" name="" className="border p-1 rounded-md" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                Full Address
              </label>
              <textarea
                name=""
                id=""
                cols="10"
                className="border p-1 rounded-md"
                rows=""
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                City
              </label>
              <input type="text" name="" className="border p-1 rounded-md" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                State
              </label>
              <input type="text" name="" className="border p-1 rounded-md" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg font-medium">
                Zip Code
              </label>
              <input type="text" name="" className="border p-1 rounded-md" />
            </div>
          </form>
        </div>
        <div className="max-w-[1328px] m-auto p-4">
          <div class="mb-4 border rounded-lg p-4">
            {" "}
            <h2 className="mb-4 text-lg font-medium">
              Payment of : ${allproductPrice}
              {/* {Math.floor(OrdertoPay * 100 - 33)}/- */}
            </h2>
            <form className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col">
                <label htmlFor="" className=" text-lg mb-4 font-medium">
                  Enter the card number :{" "}
                </label>
                <input
                  id="cnum"
                  type="text"
                  onChange={(e) => setCard(e.target.value)}
                  value={card}
                  required
                  minLength="16"
                  placeholder="Enter Your Card Number"
                  className="border p-1 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="expiry" className="text-lg font-medium">
                  Enter the expiry date :{" "}
                </label>
                <input
                  id="expiry"
                  value={exDate}
                  required
                  placeholder="MM/YY"
                  onChange={(e) => setExDate(e.target.value)}
                  type="tel"
                  minLength="5"
                  className="border mt-4 p-1 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="text-lg font-medium">
                  Enter your CVV :{" "}
                </label>
                <input
                  id="cvv"
                  type="tel"
                  required
                  placeholder="CVV"
                  minLength="3"
                  value={cvv}
                  maxLength="3"
                  onChange={(e) => setCvv(e.target.value)}
                  className="border p-1 rounded-md mt-4"
                />
              </div>
            </form>
            <div className="flex justify-center mt-4">
              <button
                className="px-5 py-2 border border-fuchsia-600 rounded-xl bg-purple-200 hover:bg-purple-700 hover:text-white"
                id="btn"
                onClick={paymentHandler}
                type="submit"
              >
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
