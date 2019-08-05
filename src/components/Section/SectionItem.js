import React from 'react';
import sectionStyles from './section.module.scss';

const SectionItem = ({category, excerpt, images, sectionFolder, slug}) => (
    <div className="col-sm-6">  
        <div className={sectionStyles.SectionItem}>
        <a href={slug}>
            <img src={"/images/tabs/"+sectionFolder+"/"+images[0]+".png"}/>
        </a>
        <h3><a href={slug}>{category}</a></h3>
        <div>{excerpt}</div> 
        </div>                           
    </div>        
)
  
export default SectionItem;
