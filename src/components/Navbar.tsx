import NextLink from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
      <div className="relative bg-white mx-6">
          <div className="flex items-center justify-between pt-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                  <h1 className="text-2xl">
                      <NextLink href="/" className="cursor-pointer">
                          E-commerce
                      </NextLink>
                  </h1>
              </div>
              <div className="flex items-center space-x-6">
                  <div className="relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                      />
                      <div className="absolute left-3 top-2">
                          <FaSearch className="text-gray-400" />
                      </div>
                  </div>
                  <div>
                      <FaShoppingCart className="text-2xl text-gray-800 hover:text-gray-900 cursor-pointer" />
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Navbar;
