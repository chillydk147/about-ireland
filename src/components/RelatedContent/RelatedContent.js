import React from 'react';
import { Link } from 'gatsby';
import RelatedContentItem from './RelatedContentItem';
import relatedContentStyles from './relatedContent.module.scss';

const RelatedContent = ({relatedContent}) => (
    <div className={relatedContentStyles.relatedContent}>
        {relatedContent.length > 0 && (
            <h2>Related Content</h2>
        )}            
        {relatedContent.map((relatedContentGroup, key) => {
            return(
                <div key={key}>
                    <h3 className={relatedContentStyles.relatedContentGroupName}>{relatedContentGroup.edges[0].node.frontmatter.category}</h3>
                    <RelatedContentItem relatedContentGroup={relatedContentGroup.edges} />         
                </div>                
            );                              
        })}
    </div>
)

export default RelatedContent;
