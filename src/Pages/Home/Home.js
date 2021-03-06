import React from "react";
import Content from "../../Components/Main/Content";
import MiniPost from "../../Components/Article/MiniPost";
import Footer from "../../Components/shared/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="home bg-gray-200 relative top-16">
      <div className="container mx-auto px-4">
        <div className="sm:pt-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
            <Sidebar />
          </div>
          <div className="col-span-2">
            <div className="posts py-4 sm:px-6 ">
              <Content />
            </div>
          </div>
          <div className="hidden lg:block py-4 lg:px-2">
            <div className="savedPost py-4">
              <MiniPost />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
