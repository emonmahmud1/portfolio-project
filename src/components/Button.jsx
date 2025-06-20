import React from "react";

const Button = ({btntxt,icon}) => {
  return (
    <button className="px-1 py-3 text-black font-semibold border rounded-full  hover:bg-gray-600 hover:text-white dark:text-cyan-300 transition flex items-center gap-2">
      <span className="text-2xl">
        {icon}
      </span>{" "}
      {btntxt}
    </button>
  );
};

export default Button;
