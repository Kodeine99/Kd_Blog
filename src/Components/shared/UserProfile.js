import React from "react";

function UserProfile() {
  return (
    <>
      <div className="hidden lg:block bg-white pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
        <div className="relative h-16 bg-green-300"></div>
        <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
          <img
            alt=""
            className="object-cover w-full h-full cursor-pointer"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--TWWhZY3J--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/491299/7f51f325-8f95-4522-9015-92c8df7bc58a.jpeg"
          />
        </div>
        <div className="mt-16">
          <a
            href="#userProfile"
            className="inline-block w-full text-lg text-center font-semibold"
          >
            Kodeine
          </a>
          <p className="text-sm text-gray-600 text-center">ReactJs Dev</p>
        </div>
        <div className="follow-btn">
          <button
            className="hidden sm:block bg-blue-600 flex p-1.5 rounded-md text-white hover:bg-blue-700 focus:outline-none my-4 mx-auto px-6"
            id="user-menu"
            aria-haspopup="true"
          >
            <span className="">Follow</span>
          </button>
        </div>
        <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t">
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
            User experience
          </div>
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
            TailwindCSS
          </div>
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
            React
          </div>
          <div className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
            Painting
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
