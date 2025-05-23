import clsx from 'clsx'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
	addStoreExpense,
	editStoreExpense,
} from '../../store/slices/expensesSlice'
import { useForm } from 'react-hook-form'
import { expenseSchema } from './expense.schema'
import { zodResolver } from '@hookform/resolvers/zod'

import type { FC } from 'react'
import type { IExpense } from '../../types/expenses.type'
import type { IExpenseSchema } from './expense.schema'

import { Button, TextInput } from '@gravity-ui/uikit'
import { UISelect } from '../../components/UISelect/UISelect'
import { DatePicker } from '@gravity-ui/date-components'

import styles from './ExpenseForm.module.sass'
import { toast } from 'sonner'

interface ExpenseModalProps {
	className?: string
	expense?: IExpense
	setModalIsOpen: (boolean: boolean) => void
}

export const ExpenseForm: FC<ExpenseModalProps> = ({
	className,
	expense,
	setModalIsOpen,
}) => {
	const [category, setCategory] = useState<number>(0)
	const [date, setDate] = useState<string>('')

	const { categories } = useAppSelector((state) => state.expensesReducer)
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IExpenseSchema>({
		resolver: zodResolver(expenseSchema),
		defaultValues: {
			name: expense ? expense.name : '',
			amount: expense ? expense.amount : undefined,
		},
	})

	const onSubmit = (data: IExpenseSchema) => {
		if (expense) {
			dispatch(
				editStoreExpense({
					...data,
					category: categories[category],
					id: expense.id,
					date,
				})
			)
			reset()
			setModalIsOpen(false)
			toast.success('Готово', {
				description: `${expense.name} успешно отредактирована`,
			})
		} else {
			dispatch(
				addStoreExpense({
					...data,
					category: categories[category],
					id: Date.now().toString(),
					date,
				})
			)
			reset()
			setModalIsOpen(false)
			toast.success('Готово', {
				description: `${data.name} успешно добавлена`,
			})
		}
	}
	console.log(date)

	return (
		<form
			className={clsx(styles.form, className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<article>{expense ? 'Редактировать трату' : 'Добавить трату'}</article>
			<TextInput
				placeholder={expense ? expense.name : 'Введите название'}
				error={errors.name?.message}
				errorMessage={errors.name?.message}
				errorPlacement='inside'
				{...register('name')}
			/>
			<TextInput
				placeholder={expense ? expense.amount.toString() : 'Введите сумму'}
				type='number'
				{...register('amount')}
				error={errors.amount?.message}
				errorMessage={errors.amount?.message}
				errorPlacement='inside'
			/>
			<UISelect setCategory={setCategory} />
			<DatePicker
				format='DD.MM.YYYY'
				onUpdate={(value) => {
					setDate(value?.locale('ru').format('DD.MM.YYYY') as string)
				}}
			/>
			<Button type='submit'>{expense ? 'Редактировать' : 'Добавить'}</Button>
		</form>
	)
}
