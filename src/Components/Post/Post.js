import React from "react";

function Post() {
  return (
    <>
      <div className="posts py-4 px-6">
        <div className="posts-header p-2">
          <h1 className="text-left text-gray-700 font-bold">POSTS</h1>
        </div>
        <div className="posts-body max-wmd mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-4">
          <div class="md:flex">
            <div class="p-6 cursor-pointer ">
              <div>
                <p className="text-gray-600 font-medium">Kodeine</p>
                <div className="flex items-center text-xs text-gray-600">
                  <p>3 hours ago</p>
                  <p className="px-1">•</p>
                  <p>The frontier</p>
                </div>
              </div>
              <div class="mt-4 tracking-wide text-sm">
                <a
                  href="#post1"
                  class=" post-title block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Finding customers for your new business
                </a>
                <p class="mt-2 text-gray-500">
                  Getting a new business off the ground is a lot of hard work.
                  Here are five ideas you can use to find your first customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="posts-body max-wmd mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-4">
          <div class="md:flex">
            <div class="p-6 cursor-pointer ">
              <div>
                <p className="text-gray-600 font-medium">Tung Ramen</p>
                <div className="flex items-center text-xs text-gray-600">
                  <p>1 hours ago</p>
                  <p className="px-1">•</p>
                  <p>Coder</p>
                </div>
              </div>
              <div class="mt-4 tracking-wide text-sm">
                <a
                  href="#post1"
                  class=" post-title block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  ReactJs Notebook (Part 1)
                </a>
                <p class="mt-2 text-gray-500">
                  Hi everyone, i'm new in ReactJS. What are the arguments that i
                  must know to become an Junior ReactJS?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="posts-body max-wmd mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-4">
          <div class="md:flex">
            <div class="p-6 cursor-pointer ">
              <div>
                <p className="text-gray-600 font-medium">Tung Ramen</p>
                <div className="flex items-center text-xs text-gray-600">
                  <p>25 mins ago</p>
                  <p className="px-1">•</p>
                  <p>Dev</p>
                </div>
              </div>
              <div class="mt-4 tracking-wide text-sm">
                <a
                  href="#post1"
                  class=" post-title block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Async/Await in Javascript
                </a>
                <p class="mt-2 text-gray-500">
                  Hi everyone, i'm new in ReactJS. What are the arguments that i
                  must know to become an Junior ReactJS?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
