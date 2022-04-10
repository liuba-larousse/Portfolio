import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaShopify } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'
import { GrGraphQl, GrGatsbyjs } from 'react-icons/gr'
import { SiNetlify } from 'react-icons/si'

const skills = [
    {
        id: 0,
        name: 'HTML5',
        icon: <FaHtml5 />,
    },
    {
        id: 1,
        name: 'CSS3',
        icon: <FaCss3Alt />,
    },
    {
        id: 2,
        name: 'Javascript',
        icon: <DiJavascript />,
    },
    {
        id: 3,
        name: 'React',
        icon: <FaReact />,
    },
    {
        id: 4,
        name: 'SASS',
        icon: <FaSass />,
    },

    {
        id: 5,
        name: 'Gatsby',
        icon: <GrGatsbyjs />,
    },
    {
        id: 6,
        name: 'Gatsby',
        icon: <GrGraphQl />,
    },
    {
        id: 7,
        name: 'Shopify',
        icon: <FaShopify />,
    },
    {
        id: 8,
        name: 'Netlify',
        icon: <SiNetlify />,
    },
]

export { skills }
