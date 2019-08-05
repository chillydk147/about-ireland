import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    setSkipNext,
    setSkipPrev
} from "./actions";
import sectionDirectoryStyles from './sectionDirectory.module.scss';

const SectionDirectoryNavButtons = (props) => {
    const {isFirst, isLast} = props; //props
    const {setSkipPrev, setSkipNext} = props; //actions
    return(
        <div className={sectionDirectoryStyles.sectionDirectoryNavButtons}>
            {!isFirst && (
            <span onClick={() => setSkipPrev()}>PREV</span>
            )}
            {!isLast && (
            <span onClick={() => setSkipNext()}>NEXT</span>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    isFirst: state.SectionDirectories.isFirst,
    isLast: state.SectionDirectories.isLast
});
  
const mapDispatchToProps = dispatch =>
    bindActionCreators(
    {
        setSkipNext,
        setSkipPrev
    },
    dispatch
);
  
export default connect(mapStateToProps, mapDispatchToProps)(SectionDirectoryNavButtons);
