"use client";

import { sliderData } from "@/constants/index";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  setTimeout(() => {
    setImageIndex(imageIndex + 1);
    if (imageIndex > 1) {
      setImageIndex(0);
    }
  }, 5000);

  return (
    <div className="flex max-xl:flex-col w-full h-full">
      <div className="relative bg-neutral-200 flex-[4] isolate">
        <ul>
          {sliderData.map((item) => (
            <li key={item.id}>{imageIndex === item.id && item.title}</li>
          ))}
        </ul>

        {sliderData.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.title}
            width={1920}
            height={1080}
            className={`absolute top-0 left-0 transition-[opacity,transform] duration-500 ${
              imageIndex === item.id
                ? "opacity-100 translate-x-0"
                : "!opacity-0 translate-x-20"
            } object-cover w-full h-full -z-10`}
            priority
          />
        ))}
      </div>
      <div className="flex-[1] p-14">Placeholder</div>
    </div>
  );
}
