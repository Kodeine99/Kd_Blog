import React from "react";
import ActionsMenu from "../../Components/shared/ActionsMenu";
import PostDetailsComp from "../../Components/Post/PostDetailsComp";
import UserProfile from "../../Components/shared/UserProfile";

function PostDetail() {
  return (
    <div className="post_details bg-gray-200 relative top-16 py-4 md:px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-12">
          <div className="actionsMenu hidden md:block ">
            <ActionsMenu />
          </div>
          <div className="sm:col-span-11 lg:col-span-8">
            <PostDetailsComp />
          </div>
          <div className="col-span-3">
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
