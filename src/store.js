import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from './config';
import { themeReducer } from "./features/theme/theme-slice";
import { controlReducer } from "./features/controls/controls-slice";
import { countryReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		controls: controlReducer,
		countries: countryReducer,
		details: detailsReducer,
	},
	devTools: true,
	middleware: (getDefaultMidlleware) => getDefaultMidlleware({
		thunk: {
			extraArgument: {
				client: axios,
				api,
			},
		},
		serializableCheck: false,
	})
})
