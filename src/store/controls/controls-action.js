export const SET_SEARCH = '@@conrols/SET_SEARCH';
export const SET_REGION = '@@controls/SET_REGION';
export const CLEAN_CONTROLS = '@@controls/CLEAN_CONTROLS';

export const setSearch = (search) => ({
	type: SET_SEARCH,
	payload: search,
});

export const setRegion = (region) => ({
	type: SET_REGION,
	payload: region
});

export const cleanControls = () => ({
	type: CLEAN_CONTROLS,
});