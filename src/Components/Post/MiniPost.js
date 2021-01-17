import React from "react";

function MiniPost(props) {
  return (
    <div className="bg-white p-2 rounded w-full">
      <div className="posts-header border-b-2 border-black">
        <h1 className="text-left text-gray-700 font-bold">Saved Posts</h1>
      </div>
      <ul>
        <li className="border-b-2">
          <a
            href="#post1"
            class=" post-title block my-2 text-base leading-tight font-base text-gray-700 hover:underline"
          >
            Finding customers for your new business
          </a>
        </li>
        <li className="border-b-2">
          <a
            href="#post2"
            className=" post-title block my-2 text-base leading-tight font-base text-gray-700 hover:underline"
          >
            ReactJs Notebook (Part 1)
          </a>
        </li>
        <li>
          <a
            href="#post1"
            className=" post-title block my-2 text-base leading-tight font-base text-gray-700 hover:underline"
          >
            Async/Await in Javascript
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MiniPost;
