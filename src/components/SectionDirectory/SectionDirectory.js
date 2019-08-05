import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    init
} from "./actions";
import SectionDirectoryItem from "./SectionDirectoryItem";
import Map from "../Map/Map";
import SectionDirectoryCountyFilter from "./SectionDirectoryCountyFilter";
import SectionDirectoryNavButtons from "./SectionDirectoryNavButtons";

class SectionDirectory extends React.Component {
    componentDidMount() {
        const {init, data} = this.props; //actions
        init(data);
    }

    render() {
        const {category, countyFilter, isInitialized, limit, sectionDirectories, skip, to, total} = this.props; //props
  
        return (
            isInitialized && (
                <div>
                    <h1>{category} in Ireland</h1>  
                    <SectionDirectoryCountyFilter/>
                    <Map/>   
                    <div>
                        <SectionDirectoryNavButtons/>  
                        <div>
                            Showing <b>{(skip+1)}</b> to <b>{to}</b> of <b>{total}</b>
                        </div>

                        {sectionDirectories.filter(({node},key) => (countyFilter==="" ? true : (node.frontmatter.county === countyFilter)))
                        .filter((node,key) => {
                            return (key >= parseInt(skip) && key < (parseInt(skip)+parseInt(limit)));
                        })
                        .map(({ node }, key) => {
                            const {title, excerpt, address, tel, images} = node.frontmatter;
                            const {slug} = node.fields;
                            return(
                                <SectionDirectoryItem
                                    address={address}
                                    excerpt={excerpt}
                                    images={images}
                                    index={key}
                                    key={"SectionDirectoryItem"+key}
                                    slug={slug}
                                    skip={skip}
                                    tel={tel}
                                    title={title}
                                />                                          
                            )
                        })} 
                        <SectionDirectoryNavButtons/>           
                    </div>
                </div>                
            )            
        )
    }
  }

const mapStateToProps = state => ({
    category: state.SectionDirectories.category,
    countyFilter: state.SectionDirectories.countyFilter,    
    isInitialized: state.SectionDirectories.isInitialized,
    limit: state.SectionDirectories.limit,
    sectionDirectories: state.SectionDirectories.sectionDirectories,
    skip: state.SectionDirectories.skip,
    to: state.SectionDirectories.to,
    total: state.SectionDirectories.total
});
  
const mapDispatchToProps = dispatch =>
    bindActionCreators(
    {
        init
    },
    dispatch
);
  
export default connect(mapStateToProps, mapDispatchToProps)(SectionDirectory);
