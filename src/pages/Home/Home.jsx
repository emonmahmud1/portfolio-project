import React from "react";
import Navbar from "../../components/Navbar";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import Button from "../../components/Button";
import SectionTitle from "../../components/SectionTitle";
import SkillsCardSection from "../../components/SkillsCardSection";

const Home = () => {
  return (
    <div
      className="max-w-[1440px] mx-auto"
      style={{
        backgroundImage: `url('./images/bgimg.png')`,
        backgroundRepeat: "repeat-y",
      }}
    >
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Banner */}
      <div className="relative top-0 lg:h-[680px] h-lvh mb-20">
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
                  <Button btntxt="Schedule a Call" icon={<IoCallOutline />} />
                </div>
              </div>
            </div>
      
        </div>
      </div>
      {/* Banner end*/}
      <div className="h-[800px] bg-black rounded-4xl p-5 md:p-10 text-white">
        <div>
          <SectionTitle color="text-white" />
        </div>
        <div className="border p-4 flex flex-col md:flex-row gap-10 md:justify-between">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-6xl text-wrap font-semibold w-full">My Extensive List of Skills</h1>
          </div>
          <div className="max-w-md text-end">
            <p className="text-xl">
              Building the worlds best marketing Your trusted partner for
              strategy, design, and dev.
            </p>
              <hr className="mt-8 border-dotted"/>
          </div>
        </div>
        <div className="mt-10 md:mt-20 ">
          <SkillsCardSection />
        </div>
      </div>
      <div className="h-lvh"></div>
      <div className="h-lvh"></div>
    </div>
  );
};

export default Home;
