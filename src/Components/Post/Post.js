import React from "react";

function Post() {
  return (
    <>
      <div className="posts-header p-2 xl:ml-20">
        <h1 className="text-left text-gray-700 font-bold">POSTS</h1>
      </div>
      <div className="posts-body max-wmd mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-4">
        <div class="md:flex">
          <div class="p-6 cursor-pointer ">
            <div className="post_header flex">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
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
            <div class="post_content mt-4 tracking-wide text-sm">
              <a
                href="#post1"
                className=" post-title block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Finding customers for your new business
              </a>
              <div className="post_tag mb-2">
                <a
                  href="/t/react"
                  className="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span className="text-opacity-50">#</span>
                  react
                </a>
                <a
                  href="/t/javascript"
                  className="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span className="text-opacity-50">#</span>
                  javascript
                </a>
                <a
                  href="/t/tailwind"
                  className="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span className="text-opacity-50">#</span>
                  tailwind
                </a>
              </div>
              <p className="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
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
                    10<span className="hidden md:inline">&nbsp;reactions</span>
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
                    0<span className="hidden md:inline">&nbsp;comments</span>
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
      <div className="posts-body max-wmd mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-4">
        <div className="md:flex">
          <div className="p-6 cursor-pointer ">
            <div className="post_header flex">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar"
                class="mr-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              ></img>
              <div className="">
                <p className="text-gray-600 font-medium">Tung Ramen</p>
                <div className="flex items-center text-xs text-gray-600">
                  <p>1 hours ago</p>
                  <p className="px-1">•</p>
                  <p>Coder</p>
                </div>
              </div>
            </div>
            <div class="mt-4 tracking-wide text-sm">
              <a
                href="#post2"
                class=" post-title block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                ReactJs Notebook (Part 1)
              </a>
              <div class="post_tag mb-2">
                <a
                  href="/t/react"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  react
                </a>
                <a
                  href="/t/javascript"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  javascript
                </a>
                <a
                  href="/t/tailwind"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  tailwind
                </a>
              </div>
              <p class="mt-2 text-gray-500">
                Hi everyone, i'm new in ReactJS. What are the arguments that i
                must know to become an Junior ReactJS?
              </p>
              <div class="mt-2 post_footer flex justify-between items-center">
                <div class="flex">
                  <a
                    href="/#"
                    class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      class="inline fill-current"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                    </svg>
                    9<span class="hidden md:inline">&nbsp;reactions</span>
                  </a>
                  <a
                    href="#comments"
                    class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      class="inline fill-current"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                    </svg>
                    9<span class="hidden md:inline">&nbsp;comments</span>
                  </a>
                </div>
                <div class="post_footer_savePost flex items-center">
                  <button
                    type="button"
                    class="bg-gray-400 rounded text-sm px-3 py-2 text-current hover:text-white hover:bg-gray-500"
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="posts-body max-wmd mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-4">
        <div className="md:flex">
          <div className="p-6 cursor-pointer ">
            <div className="post_header flex">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar"
                class="mr-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              ></img>
              <div className="">
                <p className="text-gray-600 font-medium">Tung Ramen</p>
                <div className="flex items-center text-xs text-gray-600">
                  <p>1 hours ago</p>
                  <p className="px-1">•</p>
                  <p>Coder</p>
                </div>
              </div>
            </div>
            <div class="mt-4 tracking-wide text-sm">
              <a
                href="#post2"
                class=" post-title block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Async/Await in Javascript
              </a>
              <div class="post_tag mb-2">
                <a
                  href="/t/react"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  react
                </a>
                <a
                  href="/t/javascript"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  javascript
                </a>
                <a
                  href="/t/tailwind"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  tailwind
                </a>
              </div>
              <p class="mt-2 text-gray-500">
                Hi everyone, i'm new in ReactJS. What are the arguments that i
                must know to become an Junior ReactJS?
              </p>
              <div class="mt-2 post_footer flex justify-between items-center">
                <div class="flex">
                  <a
                    href="/#"
                    class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      class="inline fill-current"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                    </svg>
                    99<span class="hidden md:inline">&nbsp;reactions</span>
                  </a>
                  <a
                    href="#comments"
                    class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      class="inline fill-current"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                    </svg>
                    3<span class="hidden md:inline">&nbsp;comments</span>
                  </a>
                </div>
                <div class="post_footer_savePost flex items-center">
                  <button
                    type="button"
                    class="bg-gray-400 rounded text-sm px-3 py-2 text-current hover:text-white hover:bg-gray-500"
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="posts-body max-wmd mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-4">
        <div className="md:flex">
          <div className="p-6 cursor-pointer ">
            <div className="post_header flex">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar"
                class="mr-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              ></img>
              <div className="">
                <p className="text-gray-600 font-medium">Tung Ramen</p>
                <div className="flex items-center text-xs text-gray-600">
                  <p>1 hours ago</p>
                  <p className="px-1">•</p>
                  <p>Coder</p>
                </div>
              </div>
            </div>
            <div class="mt-4 tracking-wide text-sm">
              <a
                href="#post2"
                class=" post-title block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                React hooks for beginners
              </a>
              <div class="post_tag mb-2">
                <a
                  href="/t/react"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  react
                </a>
                <a
                  href="/t/javascript"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  javascript
                </a>
                <a
                  href="/t/tailwind"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  tailwind
                </a>
              </div>
              <p class="mt-2 text-gray-500">
                Hi everyone, i'm new in ReactJS. What are the arguments that i
                must know to become an Junior ReactJS?
              </p>
              <div class="mt-2 post_footer flex justify-between items-center">
                <div class="flex">
                  <a
                    href="/#"
                    class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      class="inline fill-current"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                    </svg>
                    2<span class="hidden md:inline">&nbsp;reactions</span>
                  </a>
                  <a
                    href="#comments"
                    class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      class="inline fill-current"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                    </svg>
                    0<span class="hidden md:inline">&nbsp;comments</span>
                  </a>
                </div>
                <div class="post_footer_savePost flex items-center">
                  <button
                    type="button"
                    class="bg-gray-400 rounded text-sm px-3 py-2 text-current hover:text-white hover:bg-gray-500"
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="posts-body max-wmd mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mb-4">
        <div className="md:flex">
          <div className="p-6 cursor-pointer ">
            <div className="post_header flex">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar"
                class="mr-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              ></img>
              <div className="">
                <p className="text-gray-600 font-medium">Tung Ramen</p>
                <div className="flex items-center text-xs text-gray-600">
                  <p>1 hours ago</p>
                  <p className="px-1">•</p>
                  <p>Coder</p>
                </div>
              </div>
            </div>
            <div class="mt-4 tracking-wide text-sm">
              <a
                href="#post2"
                class=" post-title block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Top 10 Vs Code extensions
              </a>
              <div class="post_tag mb-2">
                <a
                  href="/t/react"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  react
                </a>
                <a
                  href="/t/javascript"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  javascript
                </a>
                <a
                  href="/t/tailwind"
                  class="text-sm text-gray-600 p-1 hover:text-black"
                >
                  <span class="text-opacity-50">#</span>
                  tailwind
                </a>
              </div>
              <p class="mt-2 text-gray-500">
                Hi everyone, i'm new in ReactJS. What are the arguments that i
                must know to become an Junior ReactJS?
              </p>
              <div class="mt-2 post_footer flex justify-between items-center">
                <div class="flex">
                  <a
                    href="/#"
                    class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      class="inline fill-current"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                    </svg>
                    0<span class="hidden md:inline">&nbsp;reactions</span>
                  </a>
                  <a
                    href="#comments"
                    class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
                  >
                    <svg
                      class="inline fill-current"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                    </svg>
                    0<span class="hidden md:inline">&nbsp;comments</span>
                  </a>
                </div>
                <div class="post_footer_savePost flex items-center">
                  <button
                    type="button"
                    class="bg-gray-400 rounded text-sm px-3 py-2 text-current hover:text-white hover:bg-gray-500"
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
