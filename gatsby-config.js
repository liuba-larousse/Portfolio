/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

module.exports = {
    siteMetadata: {
        title: 'Liuba`s Portfolio',
        description: 'Front-end Developer. HTML, CSS, JS, React',
        author: 'liuba.larousse',
        url: 'https://www.liuba-dveloper.com',
        image: 'https://www.liuba-developer.com/images/goImage.png',
    },
    /* Your site config here */
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-smoothscroll`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.3, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations

                // Advanced Options
                selector: '[data-sal]', // Selector of the elements to be animated
                animateClassName: 'sal-animate', // Class name which triggers animation
                disabledClassName: 'sal-disabled', // Class name which defines the disabled state
                rootMargin: '0% 25%', // Corresponds to root's bounding box margin
                enterEventName: 'sal:in', // Enter event name
                exitEventName: 'sal:out', // Exit event name
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                '~': path.join(__dirname, 'src/'),
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown-pages`,
            },
        },
        `gatsby-transformer-remark`,
    ],
}
