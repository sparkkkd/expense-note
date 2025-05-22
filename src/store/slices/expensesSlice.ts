import { createSlice } from '@reduxjs/toolkit'
import type { IExpense, IExpenseCategory } from '../../types/expenses.type'

interface IInitialState {
	expenses: IExpense[]
	categories: IExpenseCategory[]
}

const initialState: IInitialState = {
	expenses: [],
	categories: [
		{ id: 0, name: 'Без категории' },
		{ id: 1, name: 'Продукты / еда' },
		{ id: 2, name: 'Транспорт' },
		{ id: 3, name: 'Развлечения' },
		{ id: 4, name: 'Спорт' },
		{ id: 5, name: 'Другое' },
	],
}

const expensesSlice = createSlice({
	name: 'expenses',
	initialState,
	reducers: {
		addStoreExpense: (state, action: { payload: IExpense }) => {
			state.expenses.push(action.payload)
		},
		removeStoreExpense: (state, action: { payload: string }) => {
			state.expenses = state.expenses.filter(
				(expense) => expense.id !== action.payload
			)
		},
		editStoreExpense: (state, action: { payload: IExpense }) => {
			state.expenses = state.expenses.map((expense) => {
				if (expense.id === action.payload.id) return action.payload
				return expense
			})
		},
	},
})

export default expensesSlice.reducer
export const { addStoreExpense, removeStoreExpense, editStoreExpense } =
	expensesSlice.actions
