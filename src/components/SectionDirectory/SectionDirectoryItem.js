import React from 'react';
import ContentImages from "../ContentImages/ContentImages";
import sectionDirectoryStyles from './sectionDirectory.module.scss';

const SectionDirectoryItem = ({address, excerpt, images, index, slug, skip, tel, title}) => (
    <div className={sectionDirectoryStyles.sectionDirectoryItem}>                
        {excerpt !== null && (
            <h3>
                {(index+skip+1)}.
                <a href={slug}> {title}</a>
            </h3>
        )}
        {excerpt === null && (
            <h3>
                {(index+skip+1)}.
                <span> {title}</span>
            </h3>
        )}                     
        <div className={sectionDirectoryStyles.sectionDirectoryMeta}>
            <b>Address:</b> {address}
        </div>
        <div className={sectionDirectoryStyles.sectionDirectoryMeta}>
            <b>Tel:</b> {tel}
        </div>
        {excerpt !== null && (
            <div className={sectionDirectoryStyles.sectionDirectoryExcerpt}>
                {excerpt} <a href={slug}>read on</a>
            </div>
        )}       
        {images !== null && (
            <ContentImages images={images} rowHeight="60"/>
        )}             
    </div> 
)
  
export default SectionDirectoryItem;
