// import React from "react";
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import ButtonPrimary from "../misc/ButtonPrimary";

const VerifierForm = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="bg-white-300 pt-2 mt-40 pb-24" id="verifierForm">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                <motion.div className="h-full w-full p-1" variants={scrollAnimation}>

      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          Verify Your Certificate</h3>
          <p className=" mb-4 font-medium">Please Enter your Certificate unique hash Id, that we can help you to verify your <strong>digital certificate!</strong> 
          </p>
          <ScrollAnimationWrapper className="flex w-full justify-end">
                <motion.div className="h-full w-full p-1" variants={scrollAnimation}>
            <Image
              src="/assets/verifyInfo.gif"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={450}
              width={508}
            />
        
        </motion.div>
        </ScrollAnimationWrapper>
        </div>
      
      <div className="row-span-2 sm:col-span-7 sm:col-start-5 sm:col-end-20 flex flex-col">
                
        <form>
      
          <div class="relative z-0 w-full mt-10 mb-20 group">
                <input type="text" pattern="[0-9]" name="certificateId" id="certificateId" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="certificateId" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Certificate Hash ID</label>
            </div>

            
         
          <ButtonPrimary >Submit</ButtonPrimary>
        </form>
        </div>

      </div>
      </motion.div>
        </ScrollAnimationWrapper>
    </div>
  );
};

export default VerifierForm;
