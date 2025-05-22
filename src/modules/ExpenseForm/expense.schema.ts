import { z } from 'zod'

export const expenseSchema = z.object({
	name: z.string().min(1, { message: 'Название не может быть пустым' }),
	amount: z.coerce
		.number()
		.min(1, { message: 'Цена должна быть больше 0' })
		.int()
		.positive(),
})

export interface IExpenseSchema extends z.infer<typeof expenseSchema> {}
