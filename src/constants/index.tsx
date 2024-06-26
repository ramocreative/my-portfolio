import {
  RiInstagramLine,
  RiTwitterXLine,
  RiBehanceLine,
  RiMailLine,
  RiSunLine,
  RiMoonLine,
  RiMailSendLine,
} from "@remixicon/react";

export const navigation = [
  {
    id: 0,
    title: "Home",
    url: "/",
  },
  {
    id: 1,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
];

export const sliderData = [
  {
    id: 0,
    category: "Brand Identity0",
    title: "placeholder0",
    desc: "Lorem ipsum0, dolor sit amet consectetur adipisicing elit. Fuga tenetur illo consequatur voluptatibus quo error? Minima vitae dolor, alias reprehenderit aspernatur dolores similique perspiciatis consectetur quasi nesciunt animi voluptatem cumque!",
    image:
      "https://images.unsplash.com/photo-1704072383973-5f30f9c1076f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img1",
  },
  {
    id: 1,
    category: "Brand Identity1",
    title: "placeholder1",
    desc: "Lorem ipsum1, dolor sit amet consectetur adipisicing elit. Fuga tenetur illo consequatur voluptatibus quo error? Minima vitae dolor, alias reprehenderit aspernatur dolores similique perspiciatis consectetur quasi nesciunt animi voluptatem cumque!",
    image:
      "https://images.unsplash.com/photo-1717318104110-d8ef457d9c2e?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img2",
    new: true,
    newMessage: "Added recently",
  },
  {
    id: 2,
    category: "Brand Identity2",
    title: "placeholder2",
    desc: "Lorem ipsum2, dolor sit amet consectetur adipisicing elit. Fuga tenetur illo consequatur voluptatibus quo error? Minima vitae dolor, alias reprehenderit aspernatur dolores similique perspiciatis consectetur quasi nesciunt animi voluptatem cumque!",
    image:
      "https://images.unsplash.com/photo-1714548474528-4c78dc4a9508?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img3",
  },
  {
    id: 3,
    category: "Brand Identity3",
    title: "placeholder3",
    desc: "Lorem ipsum3, dolor sit amet consectetur adipisicing elit. Fuga tenetur illo consequatur voluptatibus quo error? Minima vitae dolor, alias reprehenderit aspernatur dolores similique perspiciatis consectetur quasi nesciunt animi voluptatem cumque!",
    image:
      "https://images.unsplash.com/photo-1714547808442-e4199a7f8e09?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img4",
  },
];

export const projects = [
  {
    id: "mamkalo",
    title: "Mamkalo",
    desc: "anything1 ...",
    image:
      "https://images.unsplash.com/photo-1704072383973-5f30f9c1076f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img1",
  },
  {
    id: "imad-tech",
    title: "Imad Tech",
    desc: "anything2 ...",
    image:
      "https://images.unsplash.com/photo-1717318104110-d8ef457d9c2e?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img2",
  },
  {
    id: "dupamicaffeine",
    title: "Dupamicaffeine",
    desc: "anything3 ...",
    image:
      "https://images.unsplash.com/photo-1714548474528-4c78dc4a9508?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img3",
  },
  {
    id: "tijltil-gamers",
    title: "Tijltil Gamers",
    desc: "anything3 ...",
    image:
      "https://images.unsplash.com/photo-1714547808442-e4199a7f8e09?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img4",
  },
];

export const navIcons = [
  {
    id: 0,
    name: "Light Button",
    icon: <RiSunLine size={14} />,
    styles:
      "flex items-center justify-center w-10 h-10 text-n-4 hover:text-color-1 bg-n-13 rounded-full transition-colors hover:bg-n-12",
  },
  {
    id: 1,
    name: "Dark Button",
    icon: <RiMoonLine size={14} />,
    styles:
      "flex items-center justify-center w-10 h-10 text-n-4 hover:text-color-1 bg-n-13 rounded-full transition-colors hover:bg-n-12",
  },
  {
    id: 2,
    name: "Send Email Button",
    icon: <RiMailSendLine size={14} />,
    styles:
      "flex items-center justify-center w-10 h-10 text-n-4 hover:text-color-1 bg-n-13 rounded-full transition-colors hover:bg-n-12",
  },
];

export const socials = [
  {
    id: 0,
    name: "Instagram",
    url: "https://www.instagram.com/ramocreative/",
    icon: <RiInstagramLine size={14} />,
    styles:
      "flex items-center justify-center w-10 h-10 text-n-4 hover:text-color-1 bg-n-13 rounded-full transition-colors hover:bg-n-12",
  },
  {
    id: 1,
    name: "X",
    url: "https://www.x.com/ramocreative/",
    icon: <RiTwitterXLine size={14} />,
    styles:
      "flex items-center justify-center w-10 h-10 text-n-4 hover:text-color-1 bg-n-13 rounded-full transition-colors hover:bg-n-12",
  },
  {
    id: 2,
    name: "Behnace",
    url: "https://www.behance.net/ramocreative",
    icon: <RiBehanceLine size={14} />,
    styles:
      "flex items-center justify-center w-10 h-10 text-n-4 hover:text-color-1 bg-n-13 rounded-full transition-colors hover:bg-n-12",
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:contact@ramocreative.com",
    icon: <RiMailLine size={14} />,
    styles:
      "flex items-center justify-center w-10 h-10 text-n-4 hover:text-color-1 bg-n-13 rounded-full transition-colors hover:bg-n-12",
  },
];
