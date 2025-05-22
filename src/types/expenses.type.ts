export interface IExpense {
	id: string
	name: string
	category: IExpenseCategory
	amount: number
	date: Date
}

export interface IExpenseCategory {
	id: number
	name: string
}
