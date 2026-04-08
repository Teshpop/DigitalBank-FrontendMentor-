import { RequestButton } from "@/Components/ui";
import { getAsset } from "@/utils/getAssets.js";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:h-[656px] bg-neutral-gray-50">
      {/* images */}
      <div className="relative w-full min-h-91 block lg:hidden">
        {/* Mobile image intro*/}
        <img
          className="absolute inset-0 w-full -translate-y-[18%]"
          src={getAsset("bg-intro-mobile.svg")}
          alt=""
        />
        {/* mockups mobile */}
        <img
          className="absolute px-6 -translate-y-[29%]"
          src={getAsset("image-mockups.png")}
          alt=""
        />
      </div>
      {/* images desktop */}
      <div className="relative w-full hidden lg:block">
        {/* desktop image intro */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="absolute translate-x-[24%] -translate-y-[24%] h-[989px] "
            src={getAsset("bg-intro-desktop.svg")}
            alt="intro image"
          />
        </div>
        <div className="absolute right-0 top-0 overflow-hidden">
          <img
            className="translate-x-[18%] -translate-y-[18%]"
            src={getAsset("image-mockups.png")}
            alt=""
          />
        </div>
      </div>
      {/* text */}
      <div className="relative px-6 lg:pl-40.5 flex flex-col justify-center gap-6 pb-12">
        <h1 className="text-4xl lg:text-6xl text-center lg:text-left text-primary-blue">
          Next generation digital banking
        </h1>
        <p className="text-sm lg:text-lg text-center lg:text-left text-neutral-gray-600 lg:w-112">
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="flex justify-center lg:justify-start items-center">
          <RequestButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
