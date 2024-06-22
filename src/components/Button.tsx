"use client";

import { RiArrowRightLine } from "@remixicon/react";
import { useState } from "react";

export default function Button({
  className,
  title,
  white,
}: {
  className?: string;
  title: string;
  white?: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={`button max-sm:w-full inline-flex w-max h-12 animate-shimmer items-center justify-center rounded-full ${
        white
          ? "bg-n-1 text-n-13"
          : "text-n-1 bg-[linear-gradient(110deg,#0a0a0a,45%,#02d538,55%,#0a0a0a)] bg-[length:200%_100%] border border-neutral-800"
      } px-6 transition-colors ${className || ""}`}
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <RiArrowRightLine
        size={18}
        className={`transition-all duration-500 ${
          hover ? "w-[20px] translate-x-0 mr-2" : "w-0 translate-x-[50%]"
        }`}
      />
      {title}
    </button>
  );
}
