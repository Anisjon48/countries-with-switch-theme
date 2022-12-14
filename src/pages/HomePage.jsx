import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { Card } from '../components/Card'
import { Controls } from '../components/Controls'
import { List } from '../components/List'
import { selectCountriesInfo, selectVisibleCountries } from "../store/countries/countries-selectors"
import { loadCountries } from "../store/countries/countries-actions"
import { selectControls } from "../store/controls/controls-selectors"

export const HomePage = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const {search, region} = useSelector(selectControls);
	const countries = useSelector(state => selectVisibleCountries(state, {search, region}));
	const { status, error, quantity } = useSelector(selectCountriesInfo);
	const numberFormat2 = new Intl.NumberFormat('en-US');

	useEffect(() => {
		if(!quantity) {
			dispatch(loadCountries());
		}
	}, [quantity, dispatch])

	return (
		<>
			<Controls />

			{error && <h2>Cant't fetch data</h2>}
			{status === 'loading' && <h2>Loading...</h2>}

			{status === 'received' && (
				<List>
					{countries.map((c) => {
						const countryInfo = {
							img: c.flags.png,
							name: c.name,
							info: [
								{
									title: 'Population',
									description: numberFormat2.format(c.population),
								},
								{
									title: 'Region',
									description: c.region,
								},
								{
									title: 'Capital',
									description: c.capital,
								},
							]
						}
						return (
							<Card
								key={c.name}
								onClick={() => navigate(`/country/${c.name}`)}
								{...countryInfo}
							/>
						)
					})}
				</List>
			)}
		</>
	)
}