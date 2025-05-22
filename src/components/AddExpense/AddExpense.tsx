import clsx from 'clsx'
import { useState, type FC } from 'react'

import { CiCirclePlus } from 'react-icons/ci'
import { Modal } from '../../modules/Modal/Modal'
import { ExpenseForm } from '../../modules/ExpenseForm/ExpenseForm'

import styles from './AddExpense.module.sass'

interface AddExpenseProps {
	className?: string
}

export const AddExpense: FC<AddExpenseProps> = ({ className }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	return (
		<>
			<div
				className={clsx(styles.add, className)}
				onClick={() => setIsModalOpen(true)}
			>
				<CiCirclePlus size={40} className={styles.icon} />
				<span className={styles.addText}>Добавить трату</span>
			</div>

			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
				<ExpenseForm setModalIsOpen={setIsModalOpen} />
			</Modal>
		</>
	)
}
