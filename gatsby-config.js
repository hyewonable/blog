module.exports = {
  siteMetadata: {
    title: `hyewonable.space`,
    name: `hyewonable`,
    siteUrl: `https://hyewonable.space`,
    description: `에디터 금혜원의 공간입니다. Everything in her life screams meaningful moment.`,
    hero: {
      heading: ``,
      maxWidth: 652,
    },
    social: [
      {
        name: `instagram`,
        url: `https://instagram.com/hyewonable`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/hyewonable`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/hyewon-gretta-geum-744024115`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hyewonable's blog`,
        short_name: `hyewonable`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
