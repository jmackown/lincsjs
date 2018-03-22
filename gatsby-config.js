module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: 'wb1sy2ahl1ol',
                accessToken: 'f198c897b625d2c86a4187714107a17a16d1d925ce2475aafb3299c124422ed8',
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark'
    ],
};