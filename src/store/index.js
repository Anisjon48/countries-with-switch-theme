import { configureStore, compose} from "@reduxjs/toolkit";
import axios from "axios";
import {rootReducer} from './root-reducer';

import * as api from '../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		thunk: {
			extraArgument: {
				client: axios,
				api,
			}
		}
	})
})