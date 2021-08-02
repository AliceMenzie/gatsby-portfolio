import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { alt } from 'joi'

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
                                <GatsbyImage image={getImage(project.frontmatter.thumb)} alt={project.frontmatter.title} />
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
            childImageSharp {
              gatsbyImageData(
                width: 300
                blurredOptions: {width: 50}
                placeholder: BLURRED
                transformOptions: {cropFocus: CENTER}
                aspectRatio: 1.5
              )
            }
          }
        }
        id
      }
    }
  }
  
`