import React from 'react';
import footerStyles from './footer.module.scss';

const Footer = ({sections}) => (
  <div className={footerStyles.FooterContainer}>
    <div className={footerStyles.Footer+" container"}>
      <div className="row">
        {sections.map(({node}, key)=>{
              const {category} = node.frontmatter;
              const {slug} = node.fields;
              return (
                <div key={"FooterNavigationItem"+key} className={footerStyles.NavigationItem+" col-sm"}>
                  <a href={slug}>{category}</a>
                </div>
              )
          })}
      </div>            
    </div>
  </div>
);

export default Footer;
