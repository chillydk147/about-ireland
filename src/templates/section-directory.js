import React from "react";
import { graphql } from "gatsby";
import App from '../containers/App';
import SectionDirectory from "../components/SectionDirectory/SectionDirectory";

export default ({ data, pageContext:{category} }) => (
  <App headerImage={category}>
    <SectionDirectory data={data}/>
  </App>
)

  export const query = graphql`
    query($slug: String!, $category: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          category
        }
      }
      allMarkdownRemark(filter: {frontmatter: {category: {eq: $category}, type: {eq: "Content"}}}, sort: {fields: html, order: DESC}) {
        distinct(field: frontmatter___county)
        edges {
          node {
            frontmatter {
              title
              category
              county
              type
              excerpt
              address
              tel
              images
              lat
              lng
            }
            fields {
                slug
            }
          }
        }
      }
    }
  `