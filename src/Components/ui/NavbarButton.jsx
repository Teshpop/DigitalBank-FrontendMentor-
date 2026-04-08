import { useState } from "react";

const NavbarButton = ({ id, name }) => {
  const [hover, setHover] = useState(false);
  return (
    <li>
      <a
        className="hover:text-primary-blue text-neutral-gray-600 text-lg"
        href={`#${id}`}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {name}
      </a>
      {hover && <div className="bg-primary-green h-0.5" />}
    </li>
  );
};

export default NavbarButton;
