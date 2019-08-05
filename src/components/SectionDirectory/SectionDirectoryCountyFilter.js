import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    filterCounty
} from "./actions";
import sectionDirectoryStyles from './sectionDirectory.module.scss';

const SectionDirectoryCountyFilter = (props) => {
    const {counties} = props; //props
    const {filterCounty} = props; //actions
    return(
        <select onChange={filterCounty} className={sectionDirectoryStyles.sectionDirectorySelect}>
            <option value="">All Ireland</option>
            {counties.map((county, key)=>{
                return (
                    <option value={county} key={key}>{county}</option>
                )
            })}
        </select>
    )
}

const mapStateToProps = state => ({
    counties: state.SectionDirectories.counties
});
  
const mapDispatchToProps = dispatch =>
    bindActionCreators(
    {
        filterCounty
    },
    dispatch
);
  
export default connect(mapStateToProps, mapDispatchToProps)(SectionDirectoryCountyFilter);
