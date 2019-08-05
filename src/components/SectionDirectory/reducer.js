import {
    INIT,
    FILTER_COUNTY,
    SET_SKIP_NEXT,
    SET_SKIP_PREV
} from "./actions";
import produce from "immer";
  
const initialState = {
    category: "",
    counties: null,
    countyFilter: "",
    currentPage: 1,
    sectionDirectories: null,
    isFirst: true,
    isInitialized: false,
    isLast: false,    
    skip: 0,
    skipIncrement:10,
    limit: 10,
    to: 100,
    total: 0,
    totalPages: 0
};

export default function(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case FILTER_COUNTY: {
            const nextState = produce(state, draftState => {
                const {countyFilter} = action;

                draftState.countyFilter = countyFilter;
                draftState.skip = 0;
                draftState.currentPage = 1;                
                draftState.total = draftState.sectionDirectories.filter(({node},key) => (countyFilter==="" ? true : (node.frontmatter.county === countyFilter))).length;
                draftState.totalPages = Math.ceil(draftState.total / draftState.limit);
                draftState.skipIncrement = (draftState.total - draftState.skip) > draftState.limit ? draftState.limit : (draftState.total - draftState.skip);
                draftState.to = (draftState.skip + draftState.skipIncrement) > draftState.total ? draftState.total : (draftState.skip + draftState.skipIncrement);
                draftState.isLast = draftState.currentPage == draftState.totalPages;
                draftState.isFirst = draftState.currentPage == 1;
            });
            return {
                ...nextState
            };
        }

        case INIT: {
            const nextState = produce(state, draftState => {
                const {data} = action;

                draftState.category = data.markdownRemark.frontmatter.category;
                draftState.counties = data.allMarkdownRemark.distinct;
                draftState.sectionDirectories = data.allMarkdownRemark.edges;
                draftState.total = draftState.sectionDirectories.length;
                draftState.totalPages = Math.ceil(draftState.total / draftState.limit);
                draftState.to = (draftState.skip+draftState.limit) < draftState.total ? (draftState.skip+draftState.limit) : draftState.total;
                draftState.isInitialized = true;
            });
            return {
                ...nextState
            };
        }

        case SET_SKIP_NEXT: {
            const nextState = produce(state, draftState => {
                draftState.skipIncrement = (draftState.total - draftState.skip) > draftState.limit ? draftState.limit : (draftState.total - draftState.skip);
                draftState.skip += draftState.skipIncrement;
                draftState.to = (draftState.skip+draftState.limit) < draftState.total ? (draftState.skip+draftState.limit) : draftState.total;
                draftState.currentPage += 1;
                draftState.isLast = draftState.currentPage == draftState.totalPages;
                draftState.isFirst = draftState.currentPage == 1;
            });
            return {
                ...nextState
            };
        }

        case SET_SKIP_PREV: {
            const nextState = produce(state, draftState => {
                draftState.skip -= draftState.skipIncrement;
                draftState.skipIncrement = (draftState.total - draftState.skip) > draftState.limit ? draftState.limit : (draftState.total - draftState.skip);
                draftState.to = (draftState.skip+draftState.limit) < draftState.total ? (draftState.skip+draftState.limit) : draftState.total;
                draftState.currentPage -= 1;
                draftState.isLast = draftState.currentPage == draftState.totalPages;
                draftState.isFirst = draftState.currentPage == 1;
            });
            return {
                ...nextState
            };
        }

        default:
        return { ...state };
    }
}
  