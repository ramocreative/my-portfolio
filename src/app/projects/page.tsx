import { projects } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main>
      <div className="grid grid-cols-2">
        {projects.map((project) => (
          <div key={project.id}>
            <Link
              className="block overflow-hidden"
              href={"projects/" + project.id}
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={1920}
                height={1080}
                className="w-full h-full aspect-video object-cover transition-transform duration-500 hover:scale-110"
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
