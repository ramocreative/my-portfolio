import ImageSlider from "./ImageSlider";
import Section from "./Section";
import Button from "./Button";
import { sliderImages } from "@/constants/index";

export default function Hero() {
  return (
    <Section customPaddings="py-0">
      <div className="min-h-[78vh] flex flex-col justify-between container">
        <div className="relative w-full h-[60vh] overflow-hidden rounded-3xl mb-24 max-lg:order-2">
          <div className="absolute bottom-24 left-12 lg:left-24 z-20">
            <h2 className="h2 text-white mb-4">Project Title</h2>
            <p className="body-1 text-white/35">Brand Identity | Iraq 2024</p>
          </div>
          <ImageSlider images={sliderImages} />
        </div>
        <div className="flex max-lg:flex-col max-lg:py-12 max-lg:text-center *:flex-1">
          <h1 className="h1 max-lg:mb-4 max-w-[20ch]">
            Let’s make your ideas become{" "}
            <span className="text-color-1">reality</span>
          </h1>
          <div className="flex flex-col">
            <p className="body-1 mb-6">
              Discover a collection of meticulously crafted branding projects
              that blend creativity with strategic vision, designed to leave a
              lasting impression and enhance your brand's identity.
            </p>
            <Button title="Button" className="mt-auto max-lg:mx-auto" />
          </div>
        </div>
      </div>
    </Section>
  );
}
