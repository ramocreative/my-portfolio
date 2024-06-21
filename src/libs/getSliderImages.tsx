export default async function getSLiderImages() {
  const res = await fetch("http://localhost:4000/sliderImages");

  return res.json();
}
