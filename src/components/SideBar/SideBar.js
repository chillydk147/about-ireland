import React from "react";
import sidebarStyles from './sidebar.module.scss';

const SideBar = ({sections}) => (
    <div id="abcd" className={sidebarStyles.SideBar}>
        {sections.map(({node}, key)=>{
            const {image} = node.frontmatter;
            const {slug} = node.fields;
            return (
                <a key={"sideBarTab"+key} href={slug}><img src={"/images/tabs/"+image}/></a>
            )
        })}
    </div>
)

export default SideBar;