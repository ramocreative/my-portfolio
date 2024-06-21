export default async function getProject(id: string) {
  const res = await fetch(`http://localhost:4000/projects/${id}`, {
    cache: "no-cache",
  });

  return res.json();
}
