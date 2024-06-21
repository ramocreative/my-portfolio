import { projects } from "@/constants/index";
import Link from "next/link";

export default function Projects() {
  return (
    <main>
      <div className="flex gap-4">
        {projects.map((project) => (
          <Link key={project.id} href={"/projects/" + project.id}>
            {project.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
