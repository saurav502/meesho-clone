import ProductCart from "../ProductCart/ProductCart";
import Pagination from "../Pagination/Pagination";
import { useState, useEffect } from "react";

const Products = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  const [products, setproducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=2`);
      const jsonData = await response.json();
      setproducts(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const handleCheckboxChange = (event) => {
    setSelectedCheckbox(event.target.value);
    setSearchQuery("");
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = products.filter(
    (item) =>
      item.category === selectedCheckbox &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="text-center text-3xl font-medium mb-6">
        Products For You
      </h1>
      <div className="max-w-[1328px] m-auto">
        <div className="product_container_you_content flex gap-24">
          <aside className="flex flex-col h-fit gap-4 border-2 mr-4 p-4">
            <div>
              <h2 className="text-xl">Filters</h2>
              <p className="text-sm">1000+ Products</p>
            </div>
            <hr className="border-black" />
            <h2 className="mb-1 text-lg font-medium">Category</h2>
            <div className="relative w-64 ">
              <div className="absolute top-[0.9rem] left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pl-10 text-base font-medium  text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                onChange={handleSearchInputChange}
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <input
                  className="w-4 h-4"
                  type="radio"
                  value="All"
                  checked={selectedCheckbox === "All"}
                  onChange={handleCheckboxChange}
                />
                <label forhtml="men's clothing">All</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  className="w-4 h-4"
                  type="radio"
                  value="men's clothing"
                  checked={selectedCheckbox === "men's clothing"}
                  onChange={handleCheckboxChange}
                />
                <label forhtml="men's clothing">Men's Clothing</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  value="jewelery"
                  checked={selectedCheckbox === "jewelery"}
                  onChange={handleCheckboxChange}
                />
                <label forhtml="jewelery">
                  <span>Jewelery</span>
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  value="electronics"
                  checked={selectedCheckbox === "electronics"}
                  onChange={handleCheckboxChange}
                />
                <label forhtml="electronics">
                  <span>Electronics</span>
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  value="women's clothing"
                  checked={selectedCheckbox === "women's clothing"}
                  onChange={handleCheckboxChange}
                />
                <label forhtml="women's clothing">
                  <span>Women's Clothing</span>
                </label>
              </div>
            </div>
          </aside>
          <main
            className="flex flex-wrap gap-6 mb-4"
            id="product_category_displayId"
          >
            <ProductCart filteredData={filteredData} products={products} />
            <Pagination />
          </main>
        </div>
      </div>
    </>
  );
};

export default Products;
