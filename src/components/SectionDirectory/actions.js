export const FILTER_COUNTY = "FILTER_COUNTY";
export const INIT = "INIT";
export const SET_SKIP_NEXT = "SET_SKIP_NEXT";
export const SET_SKIP_PREV = "SET_SKIP_PREV";

export function filterCounty(e) {
    return { type: FILTER_COUNTY, countyFilter: e.target.value };
}

export function init(data) {
    return { type: INIT, data };
}

export function setSkipNext() {
    return { type: SET_SKIP_NEXT };
}

export function setSkipPrev() {
  return { type: SET_SKIP_PREV };
}
