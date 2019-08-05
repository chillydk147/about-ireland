import React from "react";
import { connect } from "react-redux";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";

const Map = ({countyFilter, limit, sectionDirectories, skip}) => {
    const center = { lat: 53.4, lng: -8.3 };
    const zoom = 7;
    return(
        <div>
            <GoogleMap
                center={center}
                zoom={zoom}
            >
            {sectionDirectories !== null && (
                sectionDirectories.filter(({node}, key) => (countyFilter==="" ? true : (node.frontmatter.county === countyFilter)))
                .filter((node,key) => {
                    return (key >= parseInt(skip) && key < (parseInt(skip)+parseInt(limit)));
                }).map(({ node }, key) => {

                    const {title, category, lat, lng} = node.frontmatter;
                    let markerPosition = { lat: parseFloat(lat), lng: parseFloat(lng) };
                                        
                    return(
                        <Marker
                            position={markerPosition}
                            icon={{
                                url:
                                "/images/icons/"+category.replace(/ /g, "-").toLowerCase()+".png",
                                labelOrigin: new window.google.maps.Point(20, 20),
                                scaledSize: new google.maps.Size(20, 20),
                                size: new google.maps.Size(20, 20)
                            }}
                            key={"marker_"+key}
                            title={title}
                        />
                    )
                })    
            )}                             
            </GoogleMap>           
        </div>     
    )
}

const mapStateToProps = state => ({
    countyFilter: state.SectionDirectories.countyFilter,    
    limit: state.SectionDirectories.limit,
    sectionDirectories: state.SectionDirectories.sectionDirectories,
    skip: state.SectionDirectories.skip
});

export default compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDGBGoAPtWejCG83KpNh24rn580N6lV1A4&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `600px` }} />,
      containerElement: <div style={{ height: `600px` }} />,
      mapElement: <div style={{ height: `600px` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(connect(mapStateToProps)(Map));