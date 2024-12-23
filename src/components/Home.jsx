import React from "react";
import abhishek from "../Assets/abhishek.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        id="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 z-10"
      >
        <div className="flex flex-col md:flex-row">
          {/* left side */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* Typed Text */}
              <ReactTyped
                className="text-red-700"
                strings={[" Developer", " Programmer", " Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a MERN Full-Stack Web Developer passionate about creating
              modern, scalable, and responsive web applications. With expertise
              in MongoDB, Express.js, React.js, and Node.js, I specialize in
              building dynamic user interfaces, robust APIs, and seamless
              front-to-backend integration. I thrive on problem-solving and
              delivering efficient, user-friendly solutions while staying
              updated with the latest web technologies.
            </p>
            <br />
            {/* Social Links */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/patel24/"
                      target="_blank"
                    >
                      <FaLinkedin
                        className="text-2xl cursor-pointer text-blue-600"
                        size={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/PatellAbhishekk"
                      target="_blank"
                    >
                      <FaGithub className="text-2xl cursor-pointer" size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/Itzzpatel24" target="_blank">
                      <FaTelegramPlane
                        className="text-2xl cursor-pointer text-sky-600"
                        size={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@patel4me" target="_blank">
                      <FiYoutube
                        className="text-2xl cursor-pointer text-red-600"
                        size={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/PatellAbhishekk" target="_blank">
                      <FaXTwitter
                        className="text-2xl cursor-pointer"
                        size={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1iar31eIubwhjXMEvO_6QrZcJX-SWYTB3/view"
                      target="_blank"
                    >
                      <TbFileCv
                        className="text-2xl cursor-pointer text-blue-600"
                        size={30}
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-green-600"
                    size={30}
                  />
                  <SiExpress
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                    size={30}
                  />
                  <FaReact
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-sky-500"
                    size={30}
                  />
                  <FaNodeJs
                    className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-green-800"
                    size={30}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="md:w-1/2 md:ml-40 md:mt-20 sm:ml-48 mt-8 order-1 z-10">
            <img
              src={abhishek}
              alt="PatellAbhishekk"
              className="max-w-xs desktop:ml-[100px] mobile:ml-[40px] tablet:-ml-[60px] h-auto object-cover shadow-lg transform transition-all duration-300 hover:scale-105 animate-shape-change-shake border-2 border-black"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
