import React from "react";
import ContentImages from "../ContentImages/ContentImages";
import RelatedContent from "../RelatedContent/RelatedContent";

const SectionDirectoryContent = ({data}) => {
    const post = data.markdownRemark;
    const {images, title, county} = post.frontmatter;
    const relatedContent = data.allMarkdownRemark.group;

    return(
        <div>
            <div>
                <h1>{title} - County {county}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                {images !== null && (
                    <ContentImages images={images} rowHeight="80"/>
                )} 
            </div>
            <RelatedContent relatedContent={relatedContent} />
        </div>
    )
}

export default SectionDirectoryContent;