import React from "react";
import { Link as RouterLink } from "react-router-dom";

function ArticleComponent(props) {
  const {
    title,
    cover_image,
    tag_list,
    description,
    url,
    comments_count,
    positive_reactions_count,
    public_reactions_count,
    user,
    published_at,
  } = props.data;
  const date = new Date(published_at);
  return (
    <div className="article">
      <div className="posts-body max-wmd mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-4">
        {cover_image && (
          <RouterLink
            to={url}
            className="article__image bg-cover w-full h-64 block"
            style={{ backgroundImage: `url(${cover_image})` }}
          ></RouterLink>
        )}
        <div className="md:flex">
          <div className="p-6 cursor-pointer ">
            <div className="post_header flex">
              <img
                src={user.profile_image_90}
                alt="avatar"
                className="mr-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              ></img>
              <div className="">
                <a
                  href={`http://dev.to/${user.username}`}
                  className="text-gray-600 font-medium hover:text-black"
                >
                  {user.name}
                </a>
                <div className="flex items-center text-xs text-gray-600">
                  <span>
                    {""}
                    {`${date.getDate()}/${
                      date.getMonth() + 1
                    }/${date.getFullYear()}`}
                  </span>
                  {/* <p className="px-1">•</p>
                  <p>The frontier</p> */}
                </div>
              </div>
            </div>
            <div className="post_content mt-4 tracking-wide text-sm">
              <a
                href={url}
                className=" post-title block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                {title}
              </a>
              <div className="post_tag mb-2">
                {tag_list.map((tag, index) => (
                  <a
                    href="/t/react"
                    className="text-sm text-gray-600 p-1 hover:text-black"
                    key={index}
                  >
                    <span className="text-opacity-50">#</span>
                    {tag}
                  </a>
                ))}
              </div>
              <p className="mt-2 text-gray-500">{description}</p>
              <div className="mt-2 post_footer flex justify-between items-center">
                <div className="flex">
                  <a
                    href="/#"
                    className="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      className="inline fill-current"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                    </svg>
                    {public_reactions_count}
                    <span className="hidden md:inline">&nbsp;reactions</span>
                  </a>
                  <a
                    href="#comments"
                    className="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      className="inline fill-current"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                    </svg>
                    {comments_count}
                    <span className="hidden md:inline">&nbsp;comments</span>
                  </a>
                </div>
                <div className="post_footer_savePost flex items-center">
                  <button
                    type="button"
                    className="bg-gray-400 rounded text-sm px-3 py-2 text-current hover:text-white hover:bg-gray-500"
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleComponent;
