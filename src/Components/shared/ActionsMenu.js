import React from "react";
import "../../assets/css/ActionsMenu.css";

function ActionsMenu() {
  return (
    <aside className="actionsSidebar__left">
      <div className="article__actions sticky top-16">
        <div className="article__actions_inner grid grid-rows-3 gap-2">
          <button
            href="/#"
            className="article__actions_btn_like py-1 pl-1 pr-1 text-gray-500 text-sm text-center rounded-full mx-auto focus:outline-none"
          >
            <span className="__actions_btn_like_svg block p-2 hover:bg-red-200 hover:text-red-500 rounded-full">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="24"
                height="24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>
            <span className="__actions_btn_like_svg__active block p-2 hover:bg-red-200 hover:text-red-500 rounded-full ">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="24"
                height="24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>
            <span>99</span>
          </button>

          <button
            href="/#"
            className="article__actions_btn_save py-1 pl-1 pr-1 text-gray-500 text-sm text-center rounded-full mx-auto focus:outline-none"
          >
            <span className="__actions_btn_save_svg block p-2 hover:bg-green-100 hover:text-green-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="24"
                height="24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </span>
            <span className="text-center">9</span>
          </button>
          <button
            href="/#"
            className="article__actions_btn_share py-1 pl-1 pr-1 text-gray-500 text-sm rounded-full mx-auto focus:outline-none"
          >
            <span className="__actions_btn_share_svg block p-2 hover:bg-blue-200 hover:text-blue-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="24"
                height="24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default ActionsMenu;
