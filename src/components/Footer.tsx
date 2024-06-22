import Link from "next/link";
import Button from "./Button";
import { socials } from "@/constants";

export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="bg-color-1">
        <div className="container flex max-xl:flex-col justify-between items-center gap-10 max-xl:gap-24 py-16">
          <div>
            <h2 className="h3 mb-4 max-w-[17ch]">
              Ready to take your brand to the next level?
            </h2>
            <h6 className="h6">
              Let's work together to create something amazing. <br /> Get in
              touch with me at{" "}
              <Link href="" className="font-bold hover:underline">
                contact@ramocreative.com
              </Link>{" "}
              or{" "}
              <Link href="" className="font-bold hover:underline">
                +964 751 132 0227
              </Link>
              . <br /> <br />{" "}
              <span className="caption opacity-75">
                Follow me on{" "}
                <Link href="" className="font-bold hover:underline">
                  @ramocreative
                </Link>{" "}
                to stay updated with my latest projects.
              </span>
            </h6>
          </div>
          <Button title="Button" />
        </div>
      </div>
      <div className="container">
        <div className="flex max-lg:flex-col gap-4 items-center justify-between my-10">
          <small>
            &copy;{new Date().getFullYear()} Ramo Creative. All rights reserved
          </small>
          <ul className="flex gap-4">
            {socials.map((social) => (
              <li key={social.id}>
                <Link
                  className={social.styles}
                  href={social.url}
                  target="_blank"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
