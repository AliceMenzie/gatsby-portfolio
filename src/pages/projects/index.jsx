import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage} from "gatsby-plugin-image"

export default function Projects({ data }) {
    console.log(data)
    const projects = data.allMarkdownRemark.nodes
    // const image = getImage(data.allMarkdownRemark.nodes.frontmatter.thumb)
    return (
        <div>
            <Layout>
                <div>
                    <h1 className={styles.hero}>Projects</h1>
                </div>
                <div className={styles.projects}>

                    {projects.map(project => (
                        <Link className={styles.project}  to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                {/* <GatsbyImage img={project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt="not working"/> */}
                                <h2>{project.frontmatter.title}</h2>
                                <p>{project.frontmatter.stack}</p>
                                <p>{project.frontmatter.deployment}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Layout>


        </div>
    )
}

// export query project metadata
export const query = graphql`
query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          deployment
          slug
          thumb {
            childrenImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
  
`