export default async function getNavLinks() {
  const res = await fetch("http://localhost:4000/navLinks");

  return res.json();
}
