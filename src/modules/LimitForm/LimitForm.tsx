import { type FC } from 'react'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useForm } from 'react-hook-form'
import { limitSchema, type ILimitSchema } from './limit.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { setLimit } from '../../store/slices/expensesSlice'

import { Button, TextInput } from '@gravity-ui/uikit'

import styles from './LimitForm.module.sass'

interface LimitFormProps {
	className?: string
	setModalIsOpen: (boolean: boolean) => void
}

export const LimitForm: FC<LimitFormProps> = ({
	className,
	setModalIsOpen,
}) => {
	const { limit } = useAppSelector((state) => state.expensesReducer)
	const dispatch = useAppDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILimitSchema>({
		resolver: zodResolver(limitSchema),
	})

	const onSubmit = ({ limit }: ILimitSchema) => {
		dispatch(setLimit(limit))
		setModalIsOpen(false)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={clsx(styles.form, className)}
		>
			<TextInput
				placeholder='Введите лимит'
				defaultValue={limit > 0 ? limit.toString() : undefined}
				type='number'
				{...register('limit')}
				error={errors.limit?.message}
				errorMessage={errors.limit?.message}
				errorPlacement='inside'
			/>
			<Button type='submit'>Установить лимит</Button>
		</form>
	)
}
