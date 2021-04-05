import React from "react";

function Skeleton2(props) {
  return (
    <div className="container w-full px-2 py-2 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-full">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
            <div className="p-6">
              <div className="flex">
                <div className="w-8 h-8 rounded-full mb-2 bg-gray-400 mr-2"></div>
                <div className="bg-gray-400 animate-pulse h-4 w-1/4 my-auto items-center"></div>
              </div>
              <div className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></div>
              <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
              <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
              <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
              <div className="flex items-center flex-wrap ">
                <div className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0 mr-2"></div>
                <div className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton2;
