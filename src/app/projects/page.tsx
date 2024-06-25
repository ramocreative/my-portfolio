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
              <div className="relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#00000000] before:hover:from-[#00000080] before:z-10 *:last:scale-110">
                <div className="absolute bottom-24 left-24 z-20 text-n-1 pointer-events-none opacity-100">
                  <h3 className="h3">{project.title}</h3>
                  <p className="body-2">{project.desc}</p>
                </div>

                <Image
                  priority
                  src={project.image}
                  alt={project.alt}
                  width={1920}
                  height={1080}
                  className="w-full h-full aspect-video object-cover"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
