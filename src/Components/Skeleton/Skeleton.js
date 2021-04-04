import React from "react";
import "../../assets/css/Skeleton.css";

function Skeleton() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <div className="skeleton image" />
        <div>
          <div className="skeleton avatar"></div>
          <div className="skeleton text"></div>
        </div>

        <div className="skeleton title"></div>

        <div className="skeleton small text"></div>
      </div>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  );
}

export default Skeleton;
