---
slug: '/projects/gitapi'
id: '2'
title: 'GitHub API search App'
image: 'project_2.png'
url: 'https://gatsby-githubapi-app.netlify.app/'
git: 'https://github.com/liuba-larousse/gatsby-github-api-test'
---

## Stack

🧱 Gatsby 📒 GitHub API 🎨 SaSS 🚀 Netlify

## Features

-   ✅ GitHub API used

    -   ⭐ Display profile info
    -   ⭐ Display commit history
    -   ⭐ Map out git repositories related to gatsby framwork

-   ✅ Search functionality with Apollo

## Description

The goal of this project is to create a web application that shows git commit history of this project.

### Learnings

💡 📖 See what I have [LEARNED](https://github.com/liuba-larousse/gatsby-github-api-test/blob/dynamic-pages/LEARNINGS.md) building this project.

<details><summary>Toggle to see learnings here</summary>

Here are some things I learned while building this website:

<br>

🌴 Topic

🥥 Tip to remember

🌿 Better code practice

📖 Reading resources

<br>

#### Gatsby

-   🥥 used gatsby-plugin-layout for setting consistent layouts across routes

-   🌴 APOLLO
    -   🥥`useLazyQuery() ` function to query on click
    -   🥥`qql` to write the query
    -   🥥 had to run `npm i @apollo/react-hooks`
    -   📖 [More about LazyQuery](https://www.apollographql.com/docs/react/api/react/hooks/#uselazyquery)

#### Sass

-   🥥 change `import s from "./header.module.scss"` to `import * as s from "./header.module.scss` due to recent changes
-   🥥 store color varibles in a `global.scss` file for easy reuse

#### Git

-   🥥 🌿 store access token in .env file and add .env to .gitignore otherwise github removes token

</details>
