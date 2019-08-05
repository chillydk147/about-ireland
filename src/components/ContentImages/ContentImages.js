import React from 'react';
import Gallery from 'react-grid-gallery';
import contentImagesStyles from './contentImages.module.scss';

const ContentImages = ({images, rowHeight}) => {
    const galleryImages = [];

    for(var i=0; i<images.length; i+=3){
      const src = images[i];
      const w = parseInt(images[i+1]);
      const h = parseInt(images[i+2]);

      galleryImages.push({
        src: "/images/directory/"+src,
        thumbnail: "/images/directory/thumbnails/"+src,
        thumbnailWidth: w,
        thumbnailHeight: h
      })
    }    
    return (
        <div className={contentImagesStyles.contentImages}>
            <Gallery images={galleryImages} rowHeight={parseInt(rowHeight)}/>
        </div>
    );
}

export default ContentImages;
