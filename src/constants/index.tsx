import {
  RiInstagramLine,
  RiTwitterXLine,
  RiBehanceLine,
  RiLinkedinLine,
  RemixiconComponentType,
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

export const sliderImages = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1717501805972-6f44905bc53c?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img1",
  },
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1717076521696-ea6d8ed0963a?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img2",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1714548474528-4c78dc4a9508?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "img3",
  },
];

export const projects = [
  {
    id: "mamkalo",
    title: "Mamkalo",
    desc: "anything1 ...",
  },
  {
    id: "imad-tech",
    title: "Imad Tech",
    desc: "anything2 ...",
  },
  {
    id: "dupamicaffeine",
    title: "Dupamicaffeine",
    desc: "anything3 ...",
  },
];

export const socials = [
  { id: 0, name: "Instagram", url: "#", icon: <RiInstagramLine size={14} /> },
  { id: 1, name: "X", url: "#", icon: <RiTwitterXLine size={14} /> },
  { id: 2, name: "Behnace", url: "#", icon: <RiBehanceLine size={14} /> },
  { id: 3, name: "Linked in", url: "#", icon: <RiLinkedinLine size={14} /> },
];
