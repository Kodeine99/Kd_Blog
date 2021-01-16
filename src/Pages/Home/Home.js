import React from "react";
import Post from "../../Components/Post/Post";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="home bg-gray-200">
      <div className="sm:pt-4 grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <Sidebar />
        </div>
        <div className="col-span-2">
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Home;
