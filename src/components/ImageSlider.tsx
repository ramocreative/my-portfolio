"use client";

import { sliderData } from "@/constants/index";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = (index: number) => {
    setImageIndex(index);
  };

  return (
    <div className="flex max-2xl:flex-col w-full h-full">
      <div className="relative bg-neutral-200 flex-[3] h-full isolate overflow-hidden rounded-3xl">
        <div className="flex flex-col h-full">
          {sliderData.map((item) => (
            <div
              key={item.id}
              className={`absolute top-14 bottom-14 left-14 right-14 md: flex flex-col text-n-1 ${
                imageIndex === item.id ? "*opacity-100" : "*:opacity-0"
              }`}
            >
              <div className="flex items-center mb-auto *:transition-[opacity,transform] *:duration-700">
                <small
                  className={`caption mr-auto max-sm:mr-0 ${
                    imageIndex === item.id
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  {item.category}
                </small>
                <small
                  className={`tagline bg-n-1/70 backdrop-blur-sm text-n-13 p-3 ${
                    item.new ? "inline" : "hidden"
                  } ${
                    imageIndex === item.id
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                >
                  {item.newMessage}
                </small>
              </div>
              <h3
                className={`h3 mb-4 ${
                  imageIndex === item.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                {item.title}
              </h3>
              <p className="body-2 mb-12 max-sm:hidden">{item.desc}</p>
              <div className={`z-10 ${imageIndex === item.id ? "" : "hidden"}`}>
                <Button title="button" white={true} />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#00000080] -z-10" />

        {sliderData.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.title}
            width={1920}
            height={1080}
            className={`absolute top-0 left-0 transition-[opacity,transform] duration-700 ${
              imageIndex === item.id
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            } object-cover w-full h-full -z-20`}
            priority
          />
        ))}
      </div>
      <ul className="flex flex-col justify-between flex-[1] px-14 py-8">
        {sliderData.map((item, index) => (
          <li
            key={item.id}
            className={`cursor-pointer relative flex items-center gap-6 p-8 overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:transition-[background-color] before:duration-700 ${
              imageIndex === item.id ? "before:bg-n-2" : ""
            } rounded-3xl`}
            onClick={() => handleClick(index)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={1920}
              height={1080}
              className="w-24 h-24 object-cover rounded-3xl"
            />
            <h6 className="h6">{item.title}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
}
