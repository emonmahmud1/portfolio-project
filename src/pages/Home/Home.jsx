import React from "react";
import Navbar from "../../components/Navbar";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import Button from "../../components/Button";
import SectionTitle from "../../components/SectionTitle";
import SkillsCardSection from "../../components/SkillsCardSection";
import WorkProcessCard from "../../components/WorkProcessCard";
import { SiMinutemailer } from "react-icons/si";
import Footer from "../../components/Footer";

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
          <h1 className="text-2xl md:text-6xl lg:7xl leading-[1.5] font-semibold">
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
                Building the world's best marketing websites for over a decade.{" "}
                <br />
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
      {/* why choose me */}
      <div className=" bg-black rounded-4xl p-5 md:p-10 text-white">
        <div>
          <SectionTitle title="Why choose me" color="text-white" />
        </div>
        <div className=" p-4 flex flex-col md:flex-row gap-10 md:justify-between">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-6xl text-wrap font-semibold w-full">
              My Extensive List of Skills
            </h1>
          </div>
          <div className="max-w-md text-end">
            <p className="text-xl">
              Building the worlds best marketing Your trusted partner for
              strategy, design, and dev.
            </p>
            <hr className="mt-8 border-dotted" />
          </div>
        </div>
        <div className="mt-10 md:mt-20 ">
          <SkillsCardSection />
        </div>
      </div>
      {/* end why choose me */}
      {/* about me */}
      <div className="p-5 md:p-10">
        <div className="flex justify-end">
          <SectionTitle title="About" color="text-black" />
        </div>
        <div className="max-w-4xl ml-auto text-right">
          <h1 className="text-2xl md:text-6xl lg:7xl leading-[1.5] font-semibold">
            I’ve been{" "}
            <span className="bg-black text-white rounded-3xl px-3">
              {" "}
              Developing
            </span>{" "}
            Websites since{" "}
            <span className="bg-black text-white rounded-3xl px-3 py-0">
              {" "}
              2024
            </span>
          </h1>
          <p className=" md:text-xl  font-semibold text-center mt-10">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </p>
        </div>
      </div>
      {/* end about me */}
      {/* work process */}
      <div className=" bg-[#141414] rounded-4xl p-5 md:p-10 text-white">
        <div className="flex items-center">
          <SectionTitle title="Work Process" color="text-white" />
          <div className="flex-1 text-center">
            <h1 className="text-3xl md:text-6xl text-wrap font-semibold w-full">
              My Work Process
            </h1>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-2">
          <div className="md:col-span-6 col-span-12">
            <WorkProcessCard />
          </div>
          <div className="col-span-12 md:col-span-6">
            <WorkProcessCard />
          </div>
          <div className="md:col-span-6 col-span-12">
            <WorkProcessCard />
          </div>
          <div className="md:col-span-6 col-span-12">
            <WorkProcessCard />
          </div>
        </div>
      </div>
      {/* end work process */}
      {/* contact */}
      <div className="p-5 md:p-10">
        <div className="">
          <SectionTitle title="Contact" color="text-black" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="w-full md:w-1/2">
            {" "}
            <h1 className="text-2xl md:text-6xl lg:7xl leading-[1.5] font-semibold">
              Interested in <br />
              <span className="bg-black text-white rounded-3xl px-3">
                {" "}
                work
              </span>{" "}
              together?
            </h1>
            <p className=" md:text-xl  font-semibold mt-10">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other
            </p>
            <div className="mt-10">
              <Button btntxt="Schedule a Call" icon={<IoCallOutline />} />
            </div>
          </div>

          <div className="card bg-base-100 shrink-0 shadow-2xl md:w-md w-full ">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="your email address"
                />
                <label className="label">Password</label>
                <input
                  type="text"
                  className="input"
                  placeholder="describe your project"
                />
                <div className="flex gap-4 items-center text-xl">
                  <Button btntxt="Send" icon={<SiMinutemailer />} />
                  <span>or</span>{" "}
                  <Button btntxt="Contact me" icon={<IoMailOpenOutline />} />
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      {/* end contact */}
      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
