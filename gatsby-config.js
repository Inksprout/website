module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'started',
        start_url: '/',
        icon: 'src/images/favison.png.'
      },
    },
  ],
}
