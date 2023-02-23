import React, { useEffect, useRef, useState } from "react";

const navLink = ["Home", "Products", "Categories", "Brand", "Pricing"].map(
  (item) => {
    return (
      <li
        className="py-1.5
      hover:text-[var(--green)]
      "
        key={item}
      >
        <button className="transition-all duration-200 ">{item}</button>
      </li>
    );
  }
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="nav" className="my-2">
      <div className="container mx-auto ">
        <nav className="flex items-center justify-between relative px-2 lg:px-0">
          <img src="/assets/logo.svg" className="w-24 lg:w-32" alt="" />
          {/* Desktop nav */}
          <ul className="lg:flex space-x-8 items-center hidden">{navLink}</ul>
          <div className="space-x-4 hidden lg:block">
            <button className="py-1.5 w-32 hover:bg-white  rounded-full shadow-md ring-2 ring-[var(--green)] transition-al duration-200  hover:shadow-sm text-[var(--green)]">
              Login
            </button>
            <button className="py-1.5 w-32 text-white rounded-full transition-al duration-200 ring-2 ring-[var(--green)]  shadow-md hover:shadow-sm  bg-[var(--green)]">
              Register
            </button>
          </div>
          {/* mobile and tablet navbar */}
          {!isOpen ? (
            <span
              onClick={handleClick}
              className=" lg:hidden material-symbols-rounded"
            >
              menu
            </span>
          ) : (
            <span
              onClick={handleClick}
              className="lg:hidden material-symbols-rounded"
            >
              close
            </span>
          )}
          {isOpen && (
            <div
              id="mobile-nav"
              className={`transition-all bg-slate-200 px-2 duration-300 pt-2.5 h-auto overflow-hidden lg:hidden shadow-lg absolute top-[110%] right-0 left-0`}
            >
              <ul className="divede-y-2 pb-2">
                {navLink}
                <li className="py-1.5">
                  <div className="space-x-4 lg:hidden">
                    <button className="py-1.5 w-32 hover:bg-white rounded-full shadow-md ring-2 ring-[var(--green)] transition-all duration-200  hover:shadow-sm text-[var(--green)]">
                      Login
                    </button>
                    <button className="py-1.5 w-32 text-white rounded-full transition-all duration-200 ring-2 ring-[var(--green)]  shadow-md hover:shadow-sm  bg-[var(--green)]">
                      Register
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
