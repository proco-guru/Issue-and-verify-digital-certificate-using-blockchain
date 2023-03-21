import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "ml-20 py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-[#1C64F2] hover:shadow-blue-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
