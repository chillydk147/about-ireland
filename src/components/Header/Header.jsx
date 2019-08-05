import React from 'react';
import headerStyles from './header.module.scss';

const toLower = (s) => s.toLowerCase().replace(/ /g, "-");

const Header = ({ headerImage, sections }) => (
  <div className={headerStyles.Header+" container"}>
    <img className={headerStyles.HeaderImage} src={"/images/headers/"+toLower(headerImage)+".png"}/> 
    <div className={headerStyles.Navigation+" container"}>
      <div className="row">
        {sections.map(({node}, key)=>{
            const {category} = node.frontmatter;
            const {slug} = node.fields;
            return (
              <div key={"HeaderNavigationItem"+key} className={headerStyles.NavigationItem+" col-sm"}>
                <a href={slug}>{category}</a>
              </div>
            )
        })}
      </div>
    </div>
  </div>
)

export default Header;
