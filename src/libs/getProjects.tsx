export default async function getProjects() {
  const res = await fetch("http://localhost:4000/projects", {
    cache: "no-cache",
  });

  return res.json();
}
