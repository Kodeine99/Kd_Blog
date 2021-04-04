import React, { useState, useEffect } from "react";
import ArticleComponent from "../Article/ArticleComponent";
import Skeleton from "../Skeleton/Skeleton";
function Content(props) {
  const [articles, setArticle] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://dev.to/api/articles");
      const data = await res.json();

      setArticle(data);
      console.log(data);
    }, 2000);
  }, []);
  return (
    <>
      <div className="posts-header p-2 2xl:ml-4">
        <h1 className="text-left text-gray-700 font-bold">POSTS</h1>
      </div>
      <div className="articles">
        {articles &&
          articles.map((article, id) => (
            <ArticleComponent key={id} data={article} />
          ))}

        {!articles && [1, 2, 3, 4].map((a) => <Skeleton></Skeleton>)}
      </div>
    </>
  );
}

export default Content;
