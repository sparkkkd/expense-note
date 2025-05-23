import { createSlice } from '@reduxjs/toolkit'
import type { IExpense, IExpenseCategory } from '../../types/expenses.type'

interface IInitialState {
	expenses: IExpense[]
	filteredExpenses: IExpense[]
	categories: IExpenseCategory[]
	limit: number
}

const initialState: IInitialState = {
	expenses: [
		{
			id: '15152321212',
			name: 'Покупка продуктов',
			category: { id: 1, name: 'Продукты / еда' },
			amount: 100,
			date: '26.05.2001',
		},
		{
			id: '2123214121',
			name: 'Покупка билетов',
			category: { id: 2, name: 'Транспорт' },
			amount: 100,
			date: '26.05.2001',
		},
	],
	filteredExpenses: [],
	categories: [
		{ id: 0, name: 'Без категории' },
		{ id: 1, name: 'Продукты / еда' },
		{ id: 2, name: 'Транспорт' },
		{ id: 3, name: 'Развлечения' },
		{ id: 4, name: 'Спорт' },
		{ id: 5, name: 'Другое' },
	],
	limit: -1,
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
		setFilteredExpenses: (state, action: { payload: number }) => {
			if (action.payload === -1) {
				state.filteredExpenses = state.expenses
			} else {
				state.filteredExpenses = state.expenses.filter(
					(expense) => expense.category.id === action.payload
				)
			}
		},
		setLimit: (state, action: { payload: number }) => {
			state.limit = action.payload
		},
	},
})

export default expensesSlice.reducer
export const {
	addStoreExpense,
	removeStoreExpense,
	editStoreExpense,
	setFilteredExpenses,
	setLimit,
} = expensesSlice.actions
