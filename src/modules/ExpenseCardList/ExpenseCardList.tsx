import { useEffect, type FC } from 'react'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { setFilteredExpenses } from '../../store/slices/expensesSlice'

import { ExpenseCard } from '../../components/ExpenseCard/ExpenseCard'

import styles from './ExpenseCardList.module.sass'

interface ExpenseCardListProps {
	className?: string
}

const expenseCardListVariants: Variants = {
	initial: {
		opacity: 0,
		scale: 0.5,
		transition: {
			staggerChildren: 0.05,
			duration: 0.2,
		},
	},
	animate: {
		opacity: 1,
		scale: 1,
	},
}

export const ExpenseCardList: FC<ExpenseCardListProps> = ({ className }) => {
	const { expenses, filteredExpenses } = useAppSelector(
		(state) => state.expensesReducer
	)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setFilteredExpenses(-1))
	}, [expenses])

	return (
		<motion.div
			className={clsx(styles.list, className)}
			variants={expenseCardListVariants}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<AnimatePresence>
				{filteredExpenses.length ? (
					filteredExpenses.map((expense) => (
						<motion.div
							key={expense.id}
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{
								opacity: 1,
								scale: 1,
								transition: { duration: 0.2 },
							}}
							exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
							style={{ width: '32%' }}
							layout
						>
							<ExpenseCard expense={expense} />
						</motion.div>
					))
				) : (
					<motion.span layout className={styles.empty} exit={{ opacity: 0 }}>
						Ничего не найдено
					</motion.span>
				)}
			</AnimatePresence>
		</motion.div>
	)
}
