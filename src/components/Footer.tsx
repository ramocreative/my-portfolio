import Link from "next/link";
import Button from "./Button";
import { socials } from "@/constants";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12">
      <div className="container">
        <div className="max-w-[54rem] lg:text-center mx-auto mb-20">
          <h2 className="h2 mb-4">
            Ready to take your brand to the next level?
          </h2>
          <p className="body-2 mb-8">
            Let's work together to create something amazing. Get in touch with
            me at{" "}
            <Link href="" className="font-bold">
              contact@ramocreative.com
            </Link>{" "}
            or{" "}
            <Link href="" className="font-bold">
              +964 751 132 0227
            </Link>
            . Follow me on{" "}
            <Link href="" className="font-bold">
              @ramocreative
            </Link>{" "}
            to stay updated with my latest projects.
          </p>
          <Button title="Button" />
        </div>
        <div className="flex max-lg:flex-col gap-4 items-center justify-between">
          <small>
            Ramo Creative &copy;{new Date().getFullYear()}. All rights reserved
          </small>
          <ul className="flex gap-4">
            {socials.map((social) => (
              <li key={social.id}>
                <Link
                  className="flex items-center justify-center w-10 h-10 text-n-4 bg-n-13 rounded-full transition-colors hover:bg-n-12"
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
