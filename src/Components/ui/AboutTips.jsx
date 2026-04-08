import { getAsset } from "@/utils/getAssets.js";

const AboutTips = ({ img, title, desc }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-8 lg:items-start lg:text-left">
      <img src={getAsset(img)} alt="" />
      <h3 className="text-2xl text-primary-blue">{title}</h3>
      <p className="text-sm text-neutral-gray-600 lg:text-base">{desc}</p>
    </div>
  );
};

export default AboutTips;
