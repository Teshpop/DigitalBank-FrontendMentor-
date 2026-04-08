import React from "react";
import { ArticleCard } from "@/Components/ui";
import { ArticlesInfo } from "@/const.js";

const Articles = () => {
  return (
    <div className="  bg-neutral-gray-50 lg:py-10">
      <h2 className="text-center text-4xl text-primary-blue py-16 lg:text-left lg:px-40.5">
        Latest Articles
      </h2>
      <div className="flex flex-col gap-4 px-6 pb-16 lg:flex-row lg:px-40.5 lg:gap-8">
        {ArticlesInfo.map((ArticleInfo) => (
          <ArticleCard
            key={ArticleInfo.title}
            img={ArticleInfo.img}
            autor={ArticleInfo.autor}
            title={ArticleInfo.title}
            desc={ArticleInfo.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
