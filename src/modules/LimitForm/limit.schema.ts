import { z } from 'zod'

export const limitSchema = z.object({
	limit: z.coerce
		.number()
		.min(1, { message: 'Лимит должен быть больше 0' })
		.int()
		.positive(),
})

export interface ILimitSchema extends z.infer<typeof limitSchema> {}
