import React from "react"
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaLinkedin,
} from "react-icons/fa"

const social = [
  {
    id: 0,
    name: "bahance",
    icon: <FaBehanceSquare />,
    link: "https://www.behance.net/liubovkapitul",
  },
  {
    id: 1,
    name: "instagram",
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/liuba_larousse/?hl=en",
  },
  {
    id: 2,
    name: "dribble",
    icon: <FaDribbbleSquare />,
    link: "https://dribbble.com/luba-kapi",
  },
  {
    id: 4,
    name: "github",
    icon: <FaGithubSquare />,
    link: "https://github.com/liuba-larousse",
  },
  {
    id: 5,
    name: "linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/liubov-kapitulskaya-4009796b/",
  },
]

export { social }
