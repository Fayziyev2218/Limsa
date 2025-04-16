import { useState } from "react";

function HamburgerButton({ open, toggle }) {

  return (
    <div onClick={toggle} className="hidden max-lg:block z-20">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-8 h-8 flex flex-col justify-between items-start group"
      >
        <span
          className={`h-1 w-full bg-[#6c2dba] rounded transition-transform duration-300 ease-in-out
        ${open ? "rotate-45 translate-y-3" : ""}`}
        />
        <span
          className={`h-1 w-[70%] bg-[#6c2dba] rounded transition-all duration-300 ease-in-out
        ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`h-1 w-full bg-[#6c2dba] rounded transition-transform duration-300 ease-in-out
        ${open ? "-rotate-45 -translate-y-3" : ""}`}
        />
      </button>
    </div>
  );
}

export default HamburgerButton;
