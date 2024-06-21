"use client";

import { RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "@/constants/index";
import { useState } from "react";

export default function Navbar() {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header className="flex items-center container z-50 py-8">
      <Link href="/">&copy;Ramo Creative</Link>
      <nav
        className={`${
          openNavigation ? "max-lg:flex" : "max-lg:hidden"
        } fixed lg:static max-lg:inset-0 flex justify-center items-center lg:ml-16 text-sm`}
      >
        <ul className="flex flex-col lg:flex-row gap-6">
          {navigation.map((item) => (
            <li key={item.id} onClick={handleClick}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="lg:hidden ml-auto" onClick={toggleNavigation}>
        <RiMenuLine />
      </button>
    </header>
  );
}
