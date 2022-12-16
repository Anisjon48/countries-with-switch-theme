import {useNavigate} from 'react-router-dom';

import { List } from '../../components/List';
import { Card } from '../../components/Card';
import { useCountries } from './use-countries';

export const CountryList = () => {
	const navigate = useNavigate();

	const [countries, {error, status}] = useCountries();

	const numberFormat2 = new Intl.NumberFormat('en-US');

	return (
		<>
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