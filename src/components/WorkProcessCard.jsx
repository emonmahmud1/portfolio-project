import React from "react";

const WorkProcessCard = () => {
  return (
    <>
 <div className="card w-full bg-black shadow-md group hover:bg-[#C5FF41] hover:rotate-5 hover:z-30 transition-all duration-300">
  <div className="flex p-4 justify-between text-black">
    <h2 className="text-black text-xl bg-[#C5FFEE] p-1 rounded-2xl font-semibold px-4 transition-all duration-200 group-hover:bg-black group-hover:text-white">
      Discovery
    </h2>
    <div className="flex justify-between gap-2 items-center">
      <span className="text-xl">--{">"}</span>
      <h2 className="text-xl text-white underline transition-colors duration-200 group-hover:text-black">
        read more..
      </h2>
    </div>
  </div>
  <div>
    <p className="text-white group-hover:text-black p-4 transition-colors duration-200">
      We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.
    </p>
  </div>
</div>

    </>
  );
};

export default WorkProcessCard;
