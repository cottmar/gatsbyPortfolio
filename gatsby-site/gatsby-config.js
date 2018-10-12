module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
  ],
  siteMetadata: {
    title: 'Cara Ottmar',
    description: 'Fullstack software developer',
    keywords: 'fullstack, MERN, Javascript, Seattle, software developer, software engineer, portfolio, react',
  },
};
