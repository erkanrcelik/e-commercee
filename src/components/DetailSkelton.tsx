import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="bg-white p-8">
      <div className="animate-pulse flex flex-col md:flex-row gap-x-8">
        <div className="min-h-80 w-full bg-gray-300 rounded-md lg:aspect-none lg:h-80"></div>
        <div className="lg:col-span-5 lg:col-start-8 mt-8 md:mt-0">
          <h1 className="text-xl font-medium text-gray-900 bg-gray-300 h-8 w-2/3"></h1>
          <p className="text-xl font-light text-gray-700 mt-4 bg-gray-300 h-6 w-4/5"></p>
          <p className="text-xl font-normal text-gray-500 mt-4 bg-gray-300 h-6 w-1/4"></p>
          <button className="inline-flex items-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-500  mt-4 cursor-not-allowed" disabled>
            Loading...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
