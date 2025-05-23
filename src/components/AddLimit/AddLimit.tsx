import { useState, type FC } from 'react'
import clsx from 'clsx'
import { LimitForm } from '../../modules/LimitForm/LimitForm'

import { Modal } from '../../modules/Modal/Modal'
import { CiCirclePlus } from 'react-icons/ci'

import styles from './AddLimit.module.sass'

interface AddLimitProps {
	className?: string
}

export const AddLimit: FC<AddLimitProps> = ({ className }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	return (
		<div className={clsx(styles.wrapper, className)}>
			<>
				<div
					className={clsx(styles.add, className)}
					onClick={() => setIsModalOpen(true)}
				>
					<CiCirclePlus size={40} className={styles.icon} />
					<span className={styles.addText}>Добавить лимит</span>
				</div>

				<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
					<LimitForm setModalIsOpen={setIsModalOpen} />
				</Modal>
			</>
		</div>
	)
}
