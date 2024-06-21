"use client";

import Link from "next/link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navIcons, navigation, socials } from "@/constants/index";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RiMailSendFill, RiMailSendLine, RiSunLine } from "@remixicon/react";

export default function Navbar() {
  const pathname = usePathname();

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
    <header className="relative flex items-center container z-50 py-8">
      <Link href="/">&copy;Ramo Creative</Link>
      <nav
        className={`${
          openNavigation ? "max-lg:translate-x-0" : "max-lg:translate-x-[100%]"
        } transition-transform duration-500 fixed lg:static max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-full flex max-lg:flex-col lg:justify-center lg:items-center max-lg:bg-n-1 max-lg:pl-16 max-lg:pt-32 lg:ml-16 text-sm max-lg:text-3xl`}
      >
        <ul className="flex flex-col lg:flex-row gap-6">
          {navigation.map((item) => (
            <li key={item.id} onClick={handleClick}>
              <Link
                className={`relative hover:text-n-13 after:absolute after:top-[120%] after:left-[50%] after:translate-x-[-50%] after:bg-color-1 hover:after:w-3 after:h-0.5 after:rounded-full transition-colors after:transition-all ${
                  item.url === pathname
                    ? "text-n-13 after:w-3"
                    : "text-n-4 after:w-0"
                }`}
                href={item.url}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex lg:hidden gap-4 mt-auto mb-20">
          {socials.map((social) => (
            <li key={social.id}>
              <Link className={social.styles} href={social.url}>
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="lg:hidden ml-auto w-5 h-5 flex flex-col gap-1.5 justify-center items-center z-10"
        onClick={toggleNavigation}
      >
        <span
          className={`flex h-0.5 bg-n-13 transition-[transform,width,margin-left,marrgin-right] duration-300 ${
            openNavigation
              ? "translate-y-2 rotate-45 w-5"
              : "w-3.5 ml-auto mr-0.5"
          }`}
        ></span>
        <span
          className={`flex w-5 h-0.5 bg-n-13 transition-opacity duration-300 ${
            openNavigation && "opacity-0"
          }`}
        ></span>
        <span
          className={`flex h-0.5 bg-n-13 transition-[transform,width,margin-left,marrgin-right] duration-300 ${
            openNavigation
              ? "-translate-y-2 -rotate-45 w-5"
              : "w-3.5 mr-auto ml-0.5"
          }`}
        ></span>
      </button>
      <div className="hidden lg:flex items-center gap-6 ml-auto">
        {navIcons.map((item) => (
          <button key={item.id}>{item.icon}</button>
        ))}
      </div>
    </header>
  );
}
