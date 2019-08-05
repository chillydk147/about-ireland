import React from 'react';
import SectionItem from "./SectionItem";
import sectionStyles from './section.module.scss';

const Section = ({data}) => {
    const post = data.markdownRemark;
    const {category, excerpt} = post.frontmatter;
    const sectionDirectories = data.allMarkdownRemark.edges;
    return (
        <div>
            <h1>{category}</h1>
            <div className={sectionStyles.SectionExcerpt}>{excerpt}</div> 
            <div className="row">
            {sectionDirectories.map(({node}, key)=>{
                const {category, excerpt, section, images} = node.frontmatter;
                let sectionFolder = section.replace(/ /g, "-").toLowerCase();
                const {slug} = node.fields;
                return (
                    <SectionItem
                        category={category}
                        excerpt={excerpt}
                        images={images}
                        key={"SectionItem"+key}
                        sectionFolder={sectionFolder}
                        slug={slug}
                    />
                )
            })}
            </div> 
        </div>        
    )
}
  
export default Section;
