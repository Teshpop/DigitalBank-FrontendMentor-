import { RequestButton } from "@/Components/ui";
import { getAsset } from "@/utils/getAssets.js";

const Footer = () => {
  return (
    <footer className="bg-primary-blue px-6 py-13 flex flex-col justify-center items-center gap-10 lg:flex-row lg:justify-between lg:px-40.5">
      <div className="flex flex-col gap-6 items-center lg:items-start lg:gap-14">
        <img src={getAsset("logo-light.svg")} alt="" />
        <div className="flex flex-row gap-4">
          <img src={getAsset("icon-facebook.svg")} alt="" />
          <img src={getAsset("icon-youtube.svg")} alt="" />
          <img src={getAsset("icon-twitter.svg")} alt="" />
          <img src={getAsset("icon-pinterest.svg")} alt="" />
          <img src={getAsset("icon-instagram.svg")} alt="" />
        </div>
      </div>
      <ul className="text-neutral-white text-center flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:text-left lg:gap-y-5 lg:gap-x-30">
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>
      <div className="flex flex-col items-center gap-6 lg:items-end">
        <RequestButton />
        <p className="text-neutral-gray-600 text-base">
          © Digitalbank. All Rights Reserved
        </p>
        <div className="text-neutral-gray-600 text-sm text-center">
          Challenge by{" "}
          <a
            className="underline font-bold"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="underline font-bold"
            href="https://github.com/Teshpop"
            target="_blank"
          >
            Pedro Tello
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
