const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('src/templates/blog-post.js')
        resolve(
            graphql(`
                {
                  allContentfulBlogPost(
                        filter: {
                            node_locale: {eq: "en-GB"}
                        },
                        sort: {
                            fields: [createdAt], order: DESC
                        }
                    ) {
                    edges {
                      node {
                        id
                        slug
                        createdAt(formatString: "MMMM DD, YYYY")
                        postTitle
                        postBody {
                          id
                          childMarkdownRemark{
                            excerpt
                          }
                        } 
                      }
                    }
                  
                  }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulBlogPost.edges.forEach((edge) => {
                    createPage ({
                        path: edge.node.slug,
                        component: blogPostTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                return
            })
        )
    })
}