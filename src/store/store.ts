import { combineReducers, configureStore } from '@reduxjs/toolkit'
import expensesReducer from './slices/expensesSlice'

const rootReducer = combineReducers({
	expensesReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
