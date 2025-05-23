import clsx from 'clsx'
import { useState, type FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setFilteredExpenses } from '../../store/slices/expensesSlice'

import { Button } from '@gravity-ui/uikit'

import styles from './Filters.module.sass'

interface FiltersProps {
	className?: string
}

export const Filters: FC<FiltersProps> = ({ className }) => {
	const [selectedCategory, setSelectedCategory] = useState<number>(-1)

	const { categories } = useAppSelector((state) => state.expensesReducer)
	const dispatch = useAppDispatch()

	const handleChangeCategory = (id: number) => {
		setSelectedCategory(id)
		dispatch(setFilteredExpenses(id))
	}

	return (
		<div className={clsx(styles.wrapper, className)}>
			<Button
				onClick={() => handleChangeCategory(-1)}
				selected={selectedCategory === -1}
			>
				Все
			</Button>
			{categories.map((category) => (
				<Button
					onClick={() => handleChangeCategory(category.id)}
					key={category.id}
					selected={selectedCategory === category.id}
				>
					{category.name}
				</Button>
			))}
		</div>
	)
}
