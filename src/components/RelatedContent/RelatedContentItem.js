import React from 'react';
import relatedContentStyles from './relatedContent.module.scss';

const RelatedContentItem = ({relatedContentGroup}) => {
    return(
        relatedContentGroup.map(({node}, key) => {
            const {title, excerpt} = node.frontmatter;
            const {slug} = node.fields;
            return(
                <div key={key} className={relatedContentStyles.relatedContentItem}>
                    <h3>
                        <a href={slug}>{title}</a>
                    </h3>
                    <div className={relatedContentStyles.relatedContentItemExcerpt}>
                        {excerpt} <a href={slug}>read on</a>
                    </div>                   
                </div>    
            );                              
        })
    );
    
}

export default RelatedContentItem;
