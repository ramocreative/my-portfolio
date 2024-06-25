import Section from "./Section";
import Button from "./Button";
import ImageSlider from "./ImageSlider";

export default function Hero() {
  return (
    <Section customPaddings="py-0">
      <div className="container">
        <div>
          <ImageSlider />
        </div>
        <div className="flex max-lg:flex-col max-lg:py-12 max-lg:text-center *:flex-1 py-24">
          <h1 className="h1 max-lg:mb-4 max-w-[20ch] mx-auto">
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
