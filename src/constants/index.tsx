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

export const navIcons = [
  { id: 0, name: "Light Button", icon: <RiSunLine size={14} /> },
  { id: 1, name: "Dark Button", icon: <RiMoonLine size={14} /> },
  { id: 2, name: "Send Email Button", icon: <RiMailSendLine size={14} /> },
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
