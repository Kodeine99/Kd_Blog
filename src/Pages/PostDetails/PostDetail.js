import React from "react";
import ActionsMenu from "../../Components/shared/ActionsMenu";
import PostDetailsComp from "../../Components/Post/PostDetailsComp";

function PostDetail() {
  return (
    <div className="post_details bg-gray-200 relative top-16 py-4 px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="actionsMenu">
            <ActionsMenu />
          </div>
          <div className="col-span-8">
            <PostDetailsComp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
