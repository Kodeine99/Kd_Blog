import React from "react";

function ArticleDetails() {
  return (
    <div className="article-wrapper w-full">
      <article className="bg-white rounded-md">
        <div className="article__header">
          <div
            className="article__header_cover relative w-full"
            style={{ paddingTop: "42%" }}
          >
            <img
              className="rounded-t-md absolute top-0 right-0 left-0 bottom-0 w-full h-full"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--RTtz_M8k--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/3jniane10gaa5osr6xjx.png"
              alt="article_cover"
            />
          </div>
          <div className="article__header_content px-10 pt-6">
            <div className="article__title text-md text-2xl md:text-lg md:text-5xl font-bold antialiased mb-3">
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
            <div className="article__author pb-4">
              <div className="post_header flex">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--TWWhZY3J--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/491299/7f51f325-8f95-4522-9015-92c8df7bc58a.jpeg"
                  alt="avatar"
                  className="mr-4 w-10 h-10 object-cover rounded-full"
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
        <div className="article__body px-4 md:px-10 py-6">
          <p>
            I'm not a Tailwind shill. I'm Kodeine - someone who has changed
            their mind on it recently and am a happy user despite acknowledged
            tradeoffs. "Crossover people" can often be more persuasive to
            skeptics than born-and-bred believers. So I hope to contribute my
            perspective to the discussion, if you are open to it.
          </p>
          <p>
            A while ago Adam Wathan asked: "Did you think Tailwind was a
            horrible idea until you actually built something with it?"
          </p>
          <p>I replied:</p>
          <blockquote className="pl-2 border-l-4 border-gray-600 my-2">
            <p>
              I once complained to @samselikoff that Tailwind caused ugly
              unreadable classname soup and said zero-runtime CSS-in-JS could do
              more with a lower learning curve.
            </p>
            <p>
              I was wrong on 2 counts: Tailwind is easier to learn than I
              thought, and CSSinJS's flexibility can be a negative.
            </p>
          </blockquote>
          <p>
            After shipping a few projects (including my personal site and book
            site) with Tailwind now, I feel I should probably jot down my
            thoughts on what I like about it. Since Tailwind is the predominant
            Utility CSS framework and the only one I've tried, I'll make no
            effort to distinguish the points below from the general benefits of
            Utility CSS (but here's a list of others).
          </p>
        </div>
        {/* comment form before login */}

        {/* comment form after login */}
        <div className="w-full mx-auto items-center justify-center mt-4 mb-4 md:px-10 py-6 max-w-lg border-t-2">
          <form className="w-full bg-white px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg font-bold">
                Discussion
              </h2>
              <div className=" flex w-full md:w-full px-3 mb-2 mt-2">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--TWWhZY3J--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/491299/7f51f325-8f95-4522-9015-92c8df7bc58a.jpeg"
                  alt="avatar"
                  className="mr-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                ></img>
                <textarea
                  className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-24 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="body"
                  placeholder="Type Your Comment"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="w-full md:w-full flex items-start md:w-full px-3">
                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                  <svg
                    fill="none"
                    className="w-5 h-5 text-gray-600 mr-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                </div>
                <div className="-mr-1">
                  <input
                    type="submit"
                    className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                    defaultValue="Post Comment"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* comments */}
        <div className="w-full mx-auto items-center justify-center mt-4 mb-4 md:px-10 py-6 max-w-lg"></div>
      </article>
    </div>
  );
}

export default ArticleDetails;
