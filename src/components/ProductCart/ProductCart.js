import { useContext } from "react";
import { Link } from "react-router-dom";
import { loading, Allproducts } from "../../App";

const ProductCart = (props) => {
  const pro = useContext(Allproducts);
  const lod = useContext(loading);
  console.log(Allproducts);
  console.log(loading);
  const { products, filteredData } = props;
  return (
    <>
      {lod ? (
        <>
          <div className="flex justify-center items-center w-full">
            <h4 className="">Loading.....</h4>
            <img
              src="https://shortpixel.com/img/spinner2.gif"
              className="w-40 h-40"
              alt=""
            />
          </div>
        </>
      ) : (
        <>
          {filteredData.length === 0 ? (
            <>
              {pro.map((data) => (
                <Link
                  to={`details/${data.id}`}
                  className="lg:w-[31%] md:w-1/2 border-2 cursor-pointer rounded-lg"
                  key={data.id}
                >
                  <div
                    key={data.id}
                    className=" relative  rounded overflow-hidden p-4"
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
                      <div className="rating1">Rating: {data.rating.rate}</div>
                      <span className="reviews1">
                        Reviews:
                        {data.rating.count}
                      </span>
                    </div>

                    {/* <div className="flexcontainer1">
                    </div> */}
                  </div>
                </Link>
              ))}
            </>
          ) : (
            <>
              {filteredData.map((data) => (
                <Link
                  to={`details/${data.id}`}
                  className="lg:w-[31%] md:w-1/2 border-2 cursor-pointer rounded-lg"
                >
                  <div
                    key={data.id}
                    className="relative  rounded overflow-hidden p-4"
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
                      <div className="rating1">Rating: {data.rating.rate}</div>
                      <span className="reviews1">
                        Reviews:
                        {data.rating.count}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProductCart;
