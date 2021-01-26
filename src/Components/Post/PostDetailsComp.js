import React from "react";

function PostDetailsComp() {
  return (
    <div className="article-wrapper ">
      <article className="bg-white rounded-md">
        <div className="article__header">
          <div
            className="article__header_cover relative w-full"
            style={{ paddingTop: "42%" }}
          >
            <img
              className="rounded-t-md absolute top-0 right-0 left-0 bottom-0"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--RTtz_M8k--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/3jniane10gaa5osr6xjx.png"
              alt="article_cover"
            />
          </div>
          <div className="article__header_content px-10 pt-6">
            <div className="article__title text-center text-lg text-5xl font-bold antialiased mb-3">
              <h1>Tailwind css for beginer</h1>
            </div>
            <div className="article__tagname mb-3">
              <a
                href="/t/react"
                className="text-sm text-gray-600 p-1 hover:text-black"
              >
                <span className="text-opacity-50">#</span>
                tailwindcss
              </a>
              <a
                href="/t/react"
                className="text-sm text-gray-600 p-1 hover:text-black"
              >
                <span className="text-opacity-50">#</span>
                tailwind
              </a>
              <a
                href="/t/react"
                className="text-sm text-gray-600 p-1 hover:text-black"
              >
                <span className="text-opacity-50">#</span>
                style
              </a>
            </div>
            <div className="article__author">
              <div className="post_header flex">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--TWWhZY3J--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/491299/7f51f325-8f95-4522-9015-92c8df7bc58a.jpeg"
                  alt="avatar"
                  class="mr-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                ></img>
                <div className="">
                  <p className="text-gray-600 font-medium">Kodeine</p>
                  <div className="flex items-center text-xs text-gray-600">
                    <p>3 hours ago</p>
                    <p className="px-1">•</p>
                    <p>The frontier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostDetailsComp;
