"use client";

import { sliderData } from "@/constants/index";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = (index: number) => {
    setImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex max-md:flex-col h-[60vh]">
      <div className="w-3/4 max-md:w-full max-md:h-3/4 max-lg:w-2/3 relative">
        {sliderData.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.title}
            width={1920}
            height={1080}
            className={`absolute inset-0 w-full h-full object-cover rounded-3xl ${
              imageIndex === item.id ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="w-1/4 max-md:w-full max-md:h-1/4 max-lg:w-1/3 flex justify-center items-center">
        <ul className="flex md:flex-col justify-between h-full py-12">
          {sliderData.map((item, index) => (
            <li
              key={item.id}
              className="relative isolate cursor-pointer flex items-center gap-4 p-6 rounded-3xl overflow-hidden"
              onClick={() => handleClick(index)}
            >
              <div
                className={`absolute inset-0 -z-10 ${
                  imageIndex === item.id && "bg-n-2"
                }`}
              />

              <Image
                key={item.id}
                src={item.image}
                alt={item.title}
                width={1920}
                height={1080}
                className="w-20 h-20 object-cover rounded-3xl"
                priority
              />
              <h6 className="h6 hidden md:block">{item.title}</h6>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
