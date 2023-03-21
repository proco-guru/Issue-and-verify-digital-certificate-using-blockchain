import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/userIcon.gif",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/locationIcon.gif",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/serverIcon.gif",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="w-screen-4rem mt-18 px-0 mt-1 xl:px-0 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="w-full flex gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col w-full justify-center items-start row-start-2 sm:row-start-1 ">
              <div className="bg-cover bg-center w-full h-fit bg-"
          style={{
            backgroundImage: 'url("/assets/mainBg.png")',
            

          }} ><h1 className="max-w-2xl text-3xl lg:text-4xl xl:text-5xl font-medium text-white-500 pl-20 pb-20 pt-40 leading-normal">
          Issuing And Verifying Digital Certificate Using <strong>Blockchain</strong>.
        </h1>
        <ButtonPrimary>Verify certificate</ButtonPrimary>

        <p className="text-black-500 mt-10 ml-2 mb-6">
          Provide a service to access and verify the digital certificate,and it is secure with us!
        </p>
                     
        

          </div>
              
            </div>
            {/* <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/mainBg.jpg"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </motion.div>
            </div> */}
          </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-16 h-16 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-16 w-16" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;
