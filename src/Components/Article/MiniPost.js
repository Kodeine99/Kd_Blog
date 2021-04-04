import React from "react";

function MiniArticle(props) {
  const savedPosts = [
    {
      id: "01",
      title: "ReactJs for beginner",
    },
    {
      id: "02",
      title: "Work management with Notion App",
    },
    {
      id: "03",
      title: "Let build a responsive blog with MERN",
    },
    {
      id: "04",
      title: "Async/await in Javascript",
    },
    {
      id: "05",
      title: "Git basics",
    },
    {
      id: "06",
      title: "What a React developer needs to know in 2021",
    },
  ];
  return (
    <div className="bg-white p-2 rounded w-full">
      <div className="flex justify-between posts-header border-b-2 border-black">
        <h1 className="text-left text-gray-700 font-bold">Saved Posts</h1>
        <a
          className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
          href="#seeall"
        >
          See all
        </a>
      </div>
      <ul>
        {savedPosts.map((post) => (
          <li className="border-b-2 py-2" key={post.id}>
            <a
              href="#post1"
              className=" post-title block my-2 text-base leading-tight font-base text-gray-700 hover:underline"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MiniArticle;
