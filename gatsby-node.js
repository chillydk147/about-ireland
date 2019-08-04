const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category,
              county
            }
            id
          }
        }
      }
    }
  `).then(result => {   
    const pages = result.data.allMarkdownRemark.edges;

    let categoryTotals = [];
    pages.forEach(({ node }) => {   
      let category = node.frontmatter.category;
      if(categoryTotals[category]==undefined){
        categoryTotals[category] = -1;
      }
      categoryTotals[category]++;
    });

    pages.forEach(({ node }) => {    
      if(node.fields.slug.includes("/section-directory-content/")){
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/section-directory-content.js"),
          context: {
            slug: node.fields.slug,
            county: node.frontmatter.county,
            id: node.id
          }
        });
      }
      if(node.fields.slug.includes("/section-directory/")){
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/section-directory.js"),
          context: {
            slug: node.fields.slug,
            category: node.frontmatter.category
          }  
        });
      }
      if(node.fields.slug.includes("/section/")){
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/section.js"),
          context: {
            slug: node.fields.slug,
            category: node.frontmatter.category
          }  
        });
      }
    });
  });
}