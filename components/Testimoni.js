import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Divesh Jadhav",
      image: "/assets/member1.jpeg",
      city: "Nashik",
      country: "India",
      rating: "4.5",
      testimoni:
        "BackEnd Devoloper",
    },
    {
      name: "Ankita Pawar",
      image: "/assets/member2.jpg",
      city: "Nashik",
      country: "India",
      rating: "4.5",
      testimoni:
        "FrontEnd Devoloper",
    },
    {
      name: "Vaishnavi Deore",
      image: "/assets/member3.jpeg",
      city: "Nashik",
      country: "India",
      rating: "4.5",
      testimoni:
        "FrontEnd Devoloper",
    },
    {
      name: "Navnath Ugale",
      image: "/assets/member4.jpeg",
      city: "Nashik",
      country: "India",
      rating: "4.5",
      testimoni:
          "Software Tester",
      },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-white-500 transition-all rounded-lg p-8 flex flex-col">
              
             <Image className="rounded-full"
                    src={listTestimonis.image}
                    height={180}
                    width={180}
                    alt="Icon People"
                  />
              <div className="flex flex-col xl:flex-row  items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  
                  <div className="flex flex-col mt-3 ml-10 text-center">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                
              </div>
              <div className="flex flex-none ml-14  items-center  ">
                  <p className=" text-center text-sm ml-4">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              <p className="mt-5 text-center">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white text-black-600 border hover:text-black-600  transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-whitetext-black-600 border hover:text-black-600 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
