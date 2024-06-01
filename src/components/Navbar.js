import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="bg-gray-500">
      <div className="  mx-8 sm:mx-16 py-4 flex justify-between items-center">
        {/* logo */}
        <a href="/">Logo</a>

        <Search />
        {/* //search  */}

        {/* //nav item lists */}
        {/* //nav-item */}
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Posts</a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
