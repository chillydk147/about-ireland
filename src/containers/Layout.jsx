import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
import '../atoms/theme/index.scss';
import layoutStyles from './stylesheets/layout.module.scss';

const Layout = ({ children, headerImage }) => {
  return(
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              hoho
            }
          }
          allMarkdownRemark(filter: {frontmatter: {type: {eq: "Section"}}}) {
            edges {
              node {
                frontmatter {
                  category
                  image
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const sections = data.allMarkdownRemark.edges;
        return(
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header headerImage={headerImage} sections={sections}/>
            <div className={layoutStyles.LayoutContainer+" container"}>
              <div className="row">
                <div className="col-sm-10">
                  {children}
                </div>         
                <div className="col-sm-2">
                    <SideBar sections={sections}/>
                </div> 
              </div>
            </div>
            <Footer sections={sections}/>
          </>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
