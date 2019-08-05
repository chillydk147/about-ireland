import React from "react";
import { graphql } from "gatsby";
import App from '../containers/App';
import SectionDirectoryContent from "../components/SectionDirectoryContent/SectionDirectoryContent";

export default ({data, data:{markdownRemark:{frontmatter:{category}}}}) => (
  <App headerImage={category}>
    <SectionDirectoryContent data={data}/>
  </App>
)
  export const query = graphql`
    query($slug: String!, $county: String!, $id: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          title
          county
          category
          images
        }
      }
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "Content"}, county: {eq: $county}, excerpt: {ne: null}}, id: {ne: $id}}) {
        group(field: frontmatter___category) {
          edges {
            node {
              frontmatter {
                title
                county
                category
                excerpt                
              }
              fields {
                slug
              }
              id
            }
          }
        }
      }
    }
  `