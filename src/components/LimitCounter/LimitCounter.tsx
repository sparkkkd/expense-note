import { type FC } from 'react'

import styles from './LimitCounter.module.sass'
import clsx from 'clsx'
import { useAppSelector } from '../../store/hooks'

interface LimitCounterProps {
	className?: string
}

export const LimitCounter: FC<LimitCounterProps> = ({ className }) => {
	const { limit, expenses } = useAppSelector((state) => state.expensesReducer)

	const remain =
		limit - expenses.reduce((acc, expense) => acc + expense.amount, 0)

	return (
		<div className={clsx(styles.counter, className)}>
			<span className={styles.limit}>
				{limit < 0 ? 'Лимит не установлен' : `Лимит ${limit} ₽`}
			</span>
			{limit > 0 && <span>|</span>}
			<span className={clsx(styles.remain, { [styles.negative]: remain < 0 })}>
				{limit < 0
					? ''
					: remain > 0
					? `Осталось ${remain} ₽`
					: `Лимит превышен (Остаток ${remain} ₽)`}
			</span>
		</div>
	)
}
