import React from "react";
import { AboutTips } from "@/Components/ui";
import { tips } from "@/const.js";

const About = () => {
  return (
    <div className="bg-neutral-gray-100 px-6 py-17.5 flex flex-col gap-10 lg:px-40.5 lg:py-30 lg:gap-20">
      <div className="text-center flex flex-col gap-6 lg:text-left lg:max-w-2xl">
        <h2 className="text-4xl text-primary-blue">Why choose Digitalbank?</h2>
        <p className="text-sm text-neutral-gray-600 lg:text-lg">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        {tips.map((tip) => (
          <AboutTips
            key={tip.title}
            img={tip.img}
            title={tip.title}
            desc={tip.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
