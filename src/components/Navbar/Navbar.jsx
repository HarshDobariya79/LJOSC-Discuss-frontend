import React from "react";
import logout from "../../utils/logout";

const Navbar = () => {
  return (
    <div className="bg-azure px-[13%] shadow-md z-50 sticky top-0">
      <div className="flex justify-between items-center">
        <button className="p-6 flex space-x-2 text-4xl items-center">
          <span className="text-outer-space font-medium">LJOSC</span>
          <span className="text-outer-space-light font-light text-2xl">|</span>
          <span className="text-outer-space-light font-light text-2xl font-serif">
            Discuss
          </span>
        </button>
        <button className="m-4" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
