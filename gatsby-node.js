// const path = require('path')
// exports.createPages = async ({ graphql, actions }) => {

//     const { data } = await graphql(`
//     query Projects {
//         allMarkdownRemark {
//           nodes {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       } 
//     `)
//       console.log(data)
//     // data.allMardownRemark.nodes.forEach(node => {
//     //     actions.createPage({
//     //         path: '/projects/' + node.frontmatter.slug,
//     //         component: path.resolve('./src/templates/project-details.jsx'),
//     //         context: { slug: node.frontmatter.slug } 
//     //            })
//     // })
// }

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const Projects = path.resolve(`./src/templates/project-details.jsx`)

  return graphql(`query Projects {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }`, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }  result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          // Path for this page — required
          path: `/projects/${edge.node.frontmatter.slug}`,
          component: Projects,
          context: { slug: edge.node.frontmatter.slug },
        })
      })
    })
  }