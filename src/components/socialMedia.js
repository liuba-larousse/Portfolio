import React from 'react'
import {
    FaInstagramSquare,
    FaGithubSquare,
    // FaDribbbleSquare,
    FaBehanceSquare,
    FaLinkedin,
} from 'react-icons/fa'
import { FiCodesandbox } from 'react-icons/fi'

const social = [
    {
        id: 0,
        name: 'github',
        icon: <FaGithubSquare />,
        link: 'https://github.com/liuba-larousse',
    },
    {
        id: 1,
        name: 'linkedin',
        icon: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/liubov-kapitulskaya-4009796b/',
    },
    // {
    //     id: 2,
    //     name: 'bahance',
    //     icon: <FaBehanceSquare />,
    //     link: 'https://www.behance.net/liubovkapitul',
    // },
    {
        id: 3,
        name: 'bahance',
        icon: <FiCodesandbox />,
        link: 'https://codesandbox.io/u/liuba-larousse',
    },
    // {
    //     id: 3,
    //     name: 'instagram',
    //     icon: <FaInstagramSquare />,
    //     link: 'https://www.instagram.com/liuba_larousse/?hl=en',
    // },
]

export { social }
