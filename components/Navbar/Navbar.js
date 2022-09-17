import React from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavRight from "./NavRight";

function Navbar() {
  const navItemList = ["Home", "About", "NFTs"];
  return (
    <div className="container py-4 border-b-2 border-nav-border">
      <div className="flex justify-between">
        <div className="flex gap-x-10">
          <NavLogo />
          <ul className="flex my-auto">
            {navItemList.map((navItem) => {
              return <li key={navItem}>
                <span className="text-light-white px-5 py-1 rounded-md hover:text-yellow cursor-pointer">{navItem}</span>
              </li>;
            })}
            <li></li>
          </ul>
          {}
        </div>
        <div>
          <NavRight />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
