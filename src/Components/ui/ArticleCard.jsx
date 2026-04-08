import { getAsset } from "@/utils/getAssets.js";

const ArticleCard = ({ img, autor, title, desc }) => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden lg:rounded-md">
      <img className="w-full h-48 object-cover" src={getAsset(img)} alt="" />
      <div className="flex flex-col px-8 py-7 gap-4 lg:py-4 lg:px-4">
        <p className="text-xs text-neutral-gray-600">{autor}</p>
        <h3 className="text-lg text-primary-blue">{title}</h3>
        <p className="text-sm text-neutral-gray-600 lg:text-base">{desc}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
