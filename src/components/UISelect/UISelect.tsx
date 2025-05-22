import clsx from 'clsx'

import { useAppSelector } from '../../store/hooks'

import { type FC } from 'react'

import { Select } from '@gravity-ui/uikit'

import styles from './UISelect.module.sass'

interface UISelectProps {
	className?: string
	setCategory: (id: number) => void
}

export const UISelect: FC<UISelectProps> = ({ className, setCategory }) => {
	const { categories } = useAppSelector((state) => state.expensesReducer)

	return (
		<div className={clsx(styles.select, className)}>
			<Select
				placeholder='Выберите категорию'
				width={300}
				onUpdate={(value) => setCategory(Number(value))}
			>
				{categories.map(({ id, name }) => (
					<Select.Option key={id} value={id.toString()}>
						{name}
					</Select.Option>
				))}
			</Select>
		</div>
	)
}
