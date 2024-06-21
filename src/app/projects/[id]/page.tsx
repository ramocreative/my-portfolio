import { projects } from "@/constants/index";

export default function Project({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main>
      {projects.map((project) => {
        return (
          project.id === id && (
            <>
              <h1>{project.title}</h1>
              <p>{project.desc}</p>
            </>
          )
        );
      })}
    </main>
  );
}
