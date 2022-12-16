import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { selectCountriesInfo, selectVisibleCountries, loadCountries } from "../countries/countries-slice";
import { selectControls } from "../controls/controls-slice";

export const useCountries = () => {
	const dispatch = useDispatch();
	const {search, region} = useSelector(selectControls);
	const countries = useSelector(state => selectVisibleCountries(state, {search, region}));
	const { status, error, quantity } = useSelector(selectCountriesInfo);

	useEffect(() => {
		if(!quantity) {
			dispatch(loadCountries());
		}
	}, [quantity, dispatch])

	return [countries, {status, error, quantity}]
}