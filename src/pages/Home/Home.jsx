import React from "react";
import Navbar from "../../components/Navbar";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";


const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="relative">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* Banner */}
        <div className="relative top-0">
          <div
            className=" lg:h-[880px]"
            style={{
              backgroundImage: `url('./images/bgimg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="lg:w-2/3 absolute mt-20 md:ml-15">
              <h1 className="text-2xl  md:text-6xl lg:7xl leading-[1.5] font-semibold">
                Trusted{" "}
                <span className="bg-black text-white rounded-3xl px-3">
                  {" "}
                  Partner
                </span>{" "}
                for <br /> Your Website{" "}
                <span className="bg-black text-white rounded-3xl px-3 py-0">
                  {" "}
                  Develop
                </span>
                .
              </h1>
              <div className="space-y-3 mt-10 grid md:grid-cols-12 gap-4">
    
                <div className="col-span-1 md:col-span-2">
                  <div className="h-full w-full p-3 flex flex-col md:-rotate-90 text-center">
                    <p className="font-bold">@emonmahmud</p>
                    <ul className="text-xl flex gap-3 justify-center md:justify-end mt-2">
                      <li>
                        <FaFacebook />
                      </li>
                      <li>
                        <FaInstagram />
                      </li>
                      <li>
                        <FaLinkedinIn />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-10 flex flex-col md:justify-start">
                  <p className="max-w-[750px] font-semibold text-[18px] mb-6 w-full">
                    Building the world's best marketing websites for over a
                    decade. <br />
                    Your trusted partner for strategy, design, and dev.
                  </p>
                  <div className="w-full">
                    <button className="px-1 py-3 text-black font-semibold border rounded-full  hover:bg-gray-600 hover:text-white transition flex items-center gap-2">
                     <span><IoCallOutline /></span> Schedule a Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
