import clsx from 'clsx'
import { useState, type FC } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { removeStoreExpense } from '../../store/slices/expensesSlice'

import { DropdownMenu } from '@gravity-ui/uikit'
import { Modal } from '../../modules/Modal/Modal'
import { ExpenseForm } from '../../modules/ExpenseForm/ExpenseForm'

import type { IExpense } from '../../types/expenses.type'

import styles from './ExpenseCard.module.sass'

interface ExpenseCardProps {
	className?: string
	expense: IExpense
}

export const ExpenseCard: FC<ExpenseCardProps> = ({ className, expense }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const dispatch = useAppDispatch()

	return (
		<>
			<div className={clsx(styles.card, className)}>
				<span className={styles.name}>{expense.name}</span>
				<span className={styles.amount}>{expense.amount}</span>
				<span className={styles.category}>{expense.category.name}</span>
				<span className={styles.date}>
					{expense.date
						.toLocaleDateString('ru', {
							year: 'numeric',
							month: '2-digit',
							day: '2-digit',
						})
						.replace(/\s/g, '.')}
				</span>
				<div className={styles.menu}>
					<DropdownMenu
						items={[
							{
								action: () => {
									setIsModalOpen(true)
								},
								text: 'Редактировать',
							},
							{
								action: () => {
									dispatch(removeStoreExpense(expense.id))
								},
								text: 'Удалить',
							},
						]}
					/>
				</div>
			</div>

			<Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
				<ExpenseForm expense={expense} setModalIsOpen={setIsModalOpen} />
			</Modal>
		</>
	)
}
