import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar/navbar";
import CartDetails from "./CartDetails/CartDetails";
import Footer from "./Footer/Footer";
import loginimg from "../img/loginimg.jpeg";
// import { userContext } from "./Contex/UserContext";

const Login = () => {
  const [mob, setMob] = useState("");
  const verify = localStorage.getItem("userNumber");
  const [otp, setOtp] = useState("");
  const [otpStatus, setOtpStatus] = useState(false);
  const [sendOtp, setSendOtp] = useState("");
  const navigate = useNavigate();

  const handleCLick = () => {
    if (mob.length !== 10)
      toast.error("Please enter mobile number of 10 digits", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    else {
      let sendOtp = Math.floor(100000 + Math.random() * 900000);
      alert(" OTP for login -" + sendOtp);
      setSendOtp(sendOtp);
      setOtpStatus(true);
    }
  };

  const verifyOTP = () => {
    //here we comparing the type and value of the otp
    if (sendOtp === Number(otp)) {
      toast.success("login successfull", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      localStorage.setItem("userNumber", mob);

      navigate("/payment");
    } else {
      toast.error("Please enter the right OTP", {
        position: "top-right",
        autoClose: 900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      {verify ? (
        <>
          <>
            <NavBar isLoggedIn={localStorage.getItem("userNumber")} />
            <div className="flex flex-col items-center mb-4">
              <h1 className="">Hi, {verify}</h1>
              <div className="navi">
                {/* <h2 style={{ marginLeft: "10%" }}>
                  Your userNumber is {verify}
                </h2> */}
              </div>
              <div className="flex flex-col gap-4 mt-4">
                {" "}
                <button
                  className="border px-6 rounded-lg py-2 w-fit bg-fuchsia-200 hover:bg-fuchsia-600"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Navigate to Home page
                </button>
                <button
                  className="border px-6 rounded-lg py-2 w-fit bg-fuchsia-200 hover:bg-fuchsia-600"
                  id="Logout"
                  onClick={() => {
                    localStorage.removeItem("userNumber");
                    toast.success("Log out Successful", {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                    //setting cart to zero after logout
                    navigate("/");

                    document.location.reload();
                  }}
                >
                  {" "}
                  Log out
                </button>
              </div>
            </div>
            <Footer />
          </>
          <ToastContainer />
        </>
      ) : (
        <>
          <NavBar />
          <ToastContainer />
          <div className="flex max-w-xl p-4 h-96 leading-10 m-auto">
            <div className="border border-gray-300 h-fit flex flex-col rounded-lg ">
              <div className="text-xl font-medium text-center">
                <img
                  src={loginimg}
                  className="rounded-lg mb-4 h-fit w-full"
                  alt=""
                />{" "}
                {otpStatus
                  ? `Enter OTP send to ${mob}`
                  : "Sign up to view your profile"}{" "}
              </div>
              <div>
                {otpStatus ? (
                  <div>
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter OTP  here"
                      min="6"
                      max="6"
                      value={otp}
                      maxLength="6"
                      onChange={(e) => {
                        let a = e.target.value;
                        let b = a.toString();
                        setOtp(b);
                      }}
                      className="w-full py-2"
                    />
                    <button
                      className="flex bg-pink-500 w-full justify-center py-2 rounded-lg text-white text-lg"
                      onClick={verifyOTP}
                    >
                      Verify
                    </button>{" "}
                    <ToastContainer />
                  </div>
                ) : (
                  <>
                    {/* <span>Country</span> */}
                    <div className="p-4">
                      <div className="flex gap-4">
                        <div className="border-b-2 border-black">
                          <p className="py-2">IN +91</p>
                        </div>
                        <div
                          className="
                        w-[87%] border-b-2 border-black"
                        >
                          <input
                            type=""
                            max="10"
                            placeholder="Phone Number"
                            value={mob}
                            maxLength="10"
                            onChange={(e) => setMob(e.target.value)}
                            className="w-full py-2"
                          />
                        </div>
                      </div>
                      <button
                        className="flex w-full bg-pink-500 justify-center p-2 rounded-lg mt-4 text-white"
                        onClick={handleCLick}
                      >
                        Send OTP
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="text-center mt-40 p-4">
                By continuing, you agree to Meesho’s{" "}
                <a
                  href="https://www.meesho.com/legal/terms-conditions"
                  className="text-blue-500"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="https://www.meesho.com/legal/privacy"
                  className="text-blue-500"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};
export default Login;
