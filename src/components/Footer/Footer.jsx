import React from "react";
import FooterLogo from "../../assets/food-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-gray-100 dark:bg-gray-950">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-3 py-5">
              <div className="py-8 px-4">
                <h1
                  className="flex items-center gap-3
                text-xl sm:text-3xl font-bold
                text-justify sm:text-left"
                >
                  <img src={FooterLogo} alt="" className="max-w-[50px]" />
                  FOODIE
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quibusdam explicabo soluta natus. Fuga natus tenetur non
                  assumenda ea nam.
                </p>
                <br />
                <div
                  className="flex items-center
                gap-3 mt-6"
                >
                  <FaLocationArrow />
                  <p>Aralaganwila, Polonnaruwa</p>
                </div>
                <div
                  className="flex items-center
                gap-3 mt-3"
                >
                  <FaMobileAlt />
                  <p>+94 123456789</p>
                </div>
                {/* social handles */}
                <div>
                  <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#">
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="grid grid-col-2
              sm:grid-cols-3 col-span-2 md:pl-10"
              >
                <div>
                  <div className="py-8 px-4">
                    <h1
                      className="text-xl
                      font-bold text-justify
                      sm:text-left mb-3"
                    >
                      Important Links
                    </h1>
                    <ul
                      className="flex flex-col
                      gap-3"
                    >
                      <li>Home</li>
                      <li>About</li>
                      <li>Services</li>
                      <li>Login</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="py-8 px-4">
                    <h1
                      className="text-xl
                      font-bold text-justify
                      sm:text-left mb-3"
                    >
                      Important Links
                    </h1>
                    <ul
                      className="flex flex-col
                      gap-3"
                    >
                      <li>Home</li>
                      <li>About</li>
                      <li>Services</li>
                      <li>Login</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="py-8 px-4">
                    <h1
                      className="text-xl
                      font-bold text-justify
                      sm:text-left mb-3"
                    >
                      Important Links
                    </h1>
                    <ul
                      className="flex flex-col
                      gap-3"
                    >
                      <li>Home</li>
                      <li>About</li>
                      <li>Services</li>
                      <li>Login</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-10 border-t-2 border-gray-300/50">
              @copyright 2024 All rights reserved || Made with ❤️ by Pasindu
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
