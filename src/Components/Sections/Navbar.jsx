import { useState, useEffect } from "react";
import { RequestButton, NavbarButton } from "@/Components/ui";
import { Navbarlinks } from "@/const.js";
import { getAsset } from "@/utils/getAssets.js";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "unset";

    // Cleanup al desmontar
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [active]);

  return (
    <>
      <nav className="px-6 py-5 lg:px-12 xl:px-40.5 lg:py-5 flex flex-row justify-between items-center bg-neutral-white relative z-50">
        <img
          className=""
          src={getAsset("logo-dark.svg")}
          alt="digitalbank logo"
        />

        {/* Mobile */}
        <button
          onClick={() => {
            setActive(!active);
          }}
          className="lg:hidden"
        >
          <img
            className=""
            src={
              active
                ? getAsset("icon-close.svg")
                : getAsset("icon-hamburger.svg")
            }
            alt="menu icon"
          />
        </button>

        {active && (
          <div
            className="fixed top-16 inset-0 bg-gradient-to-b from-primary-blue/70 to-transparent z-50"
            onClick={() => setActive(false)}
          />
        )}

        {active && (
          <div className="absolute left-6 right-6 top-16 mt-6 bg-neutral-white rounded-md z-50 lg:hidden">
            <ul className="flex flex-col gap-6 py-6 text-lg font-normal text-primary-blue text-center">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
        )}

        {/* desktop */}

        <div className="hidden lg:inline">
          <ul className="flex flex-row justify-center items-center gap-8.5">
            {Navbarlinks.map((link) => (
              <NavbarButton key={link.id} id={link.id} name={link.title} />
            ))}
          </ul>
        </div>

        <div className="hidden lg:inline">
          <RequestButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
