import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { STATUSES } from "./store/productSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Footer from "./components/Footer/Footer";

function ProductDetails() {
  const [productDetails, setProductDetails] = useState(null);
  const [cartNumber, setCartNumber] = useState(0);
  const cartdetails = [];
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
    toast.success("Product Added To Your Cart!", {
      position: "top-center",
    });
  };
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, [pathname]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?`);
      const jsonData = await response.json();
      setProductDetails(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  if (productDetails === null) {
    console.log("null----------");
  } else {
    for (let i of productDetails) {
      console.log(i.category);
    }
  }
  console.log("productDetails", productDetails);

  return (
    <>
      <NavBar cartNumber={cartNumber} />
      {!productDetails ? (
        <img src="https://shortpixel.com/img/spinner2.gif" alt="" />
      ) : (
        <>
          <div className="flex justify-center gap-16 max-w-[1328px] m-auto">
            <div className="detailsimgandbtn">
              <img
                src={productDetails[id - 1].image}
                className="h-[28rem] w-96 border rounded-lg"
                alt=""
              />
              <div className="flex gap-4 mt-4">
                <button
                  className="flex items-center text-lg gap-2 px-8 py-2 border-fuchsia-700 border"
                  onClick={() => handleAdd(productDetails[id - 1])}
                >
                  <AiOutlineShoppingCart size={25} />
                  Add to Cart
                </button>
                <Link to="/login">
                  <button className="flex items-center text-lg gap-2 px-8 py-2 text-white border-fuchsia-700 border bg-[#9F2089]">
                    Buy Now
                    <MdKeyboardDoubleArrowRight size={25} />
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col leading-7 w-[36rem]">
              <div className="border rounded-lg border-gray-300 p-4">
                <h3 className="font-medium text-black text-xl">
                  {productDetails[id - 1].title}
                </h3>
                <h1 className="text-lg">$ {productDetails[id - 1].price}</h1>
                <span className="text-lg">
                  {productDetails[id - 1].rating.rate} Ratings
                </span>
                <p className="text-lg">
                  {productDetails[id - 1].rating.count} Reviews
                </p>
              </div>
              <div className="border mt-4 rounded-lg p-4">
                <h3 className="text-black text-xl font-medium">Select Size</h3>
                <p className="border border-fuchsia-500 w-fit px-6 py-2 mt-2 text-xl bg-fuchsia-200 rounded-full ">
                  Free Size
                </p>
              </div>

              <div className="border mt-4 rounded-lg p-4 leading-8">
                <h3 className="text-black text-xl font-medium">
                  Product Details
                </h3>
                <p className=" text-gray-600">
                  Name : {productDetails[id - 1].title}
                </p>
                <p className=" text-gray-600">
                  Base Metal : Lorem ipsum dolor sit amet
                </p>
                <p className=" text-gray-600">
                  Description : {productDetails[id - 1].description}
                </p>
                <p className=" text-gray-600">Net Quantity (N) : 1</p>
                <p className=" text-gray-600">
                  Size : Free Size (Lenght Size: 30 in)
                </p>
                <a className="text-gray-600" href="">
                  More Information
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-[1328px] m-auto mt-8 mb-8">
            <h3 className="text-2xl text-black font-medium mb-6">
              Related Products
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {productDetails.map((data) => (
                <>
                  {data.category === productDetails[id - 1].category ? (
                    <Link
                      to={`/details/${data.id}`}
                      className="lg:w-[100%] md:w-1/2 border-2 cursor-pointer rounded-lg"
                    >
                      <div
                        key={data.id}
                        className="relative rounded overflow-hidden p-4"
                      >
                        <img
                          src={data.image}
                          className="object-contain  w-full h-60"
                          alt=""
                        />
                        <h2 className="text-lg text-gray-900 font-medium mt-2">
                          {data.title}
                        </h2>
                        <div className="w-full">
                          <span>Price: ${data.price}</span>
                          <div className="rating1">
                            Rating: {data.rating.rate}
                          </div>
                          <span className="reviews1">
                            Reviews:
                            {data.rating.count}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    ""
                  )}
                </>
              ))}
            </div>
          </div>
          <Footer />
          <ToastContainer />
        </>
      )}
    </>
  );
}
export default ProductDetails;
