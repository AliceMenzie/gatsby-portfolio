import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/project.module.css"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage} from "gatsby-plugin-image"

export default function projectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack } = data.markdownRemark.frontmatter
    const image = getImage(data.markdownRemark.frontmatter.thumb)
    // console.log("--------------------------------")
    // console.log("THIS IS THE IMAGE: "+ image)
    return (
        <Layout>
            <div className={styles.wrapper}>
                <h2 >
                   { title }
                </h2>
                <h4>
                    { stack }
                </h4>
                
                <GatsbyImage image={image} alt={ title } />
        
               
                
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: html}} >

                </div>
            </div>

        </Layout>
    )
}

export const query = graphql`query Projects($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData(
                width: 400
                blurredOptions: {width: 50}
                placeholder: BLURRED
                transformOptions: {cropFocus: CENTER}
            )
          }
        }
      }
      id
    }
  }` 

