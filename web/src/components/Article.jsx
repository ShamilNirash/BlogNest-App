import React from "react";
import ArticleCard from "./ArticleCard";

export default function Article() {
  return (
    <div className="px-[3rem] md:px-[5rem] flex flex-col sm:flex-row sm:flex-wrap sm:justify-between items-center justify-center mt-10 w-full">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
}
