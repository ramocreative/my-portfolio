import { sliderData } from "@/constants/index";
import Image from "next/image";

export default function ImageSlider() {
  return (
    <div className="flex w-full h-full">
      <div className="bg-neutral-200 flex-[3]">
        <ul>
          {sliderData.map((item, index) => (
            <li key={item.id}>{item.id === index && item.title}</li>
          ))}
        </ul>

        {sliderData.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.title}
            width={1920}
            height={1080}
            className={`hidden ${
              item.id === index && "block"
            } object-cover w-full h-full block flex-shrink-0 flex-grow-0`}
          />
        ))}
      </div>
      <div className=" flex-[1] p-14">Placeholder</div>
    </div>
  );
}
