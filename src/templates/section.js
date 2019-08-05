import React from "react";
import { graphql } from "gatsby";
import App from '../containers/App';
import Section from "../components/Section/Section";

export default ({ data }) => {
    return (
      <App headerImage="default">
        <Section data={data}/>
      </App>
    )
  }
  export const query = graphql`
    query($slug: String!, $category: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          category,
          excerpt
        }
      }
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "Directory"}, section: {eq: $category}}}) {
        edges {
          node {
            frontmatter {
              category
              excerpt
              section
              images
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `