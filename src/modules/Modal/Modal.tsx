import type { FC } from 'react'
import ReactDOM from 'react-dom'
import clsx from 'clsx'
import { AnimatePresence, motion, type Variants } from 'framer-motion'

import styles from './Modal.module.sass'

interface ModalProps extends React.PropsWithChildren {
	className?: string
	isModalOpen: boolean
	setIsModalOpen: (boolean: boolean) => void
}

const overlayVariants: Variants = {
	initial: {
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
}

const wrapperVariants: Variants = {
	initial: {
		opacity: 0,
		scale: 0.8,
		fill: 'blur(5px)',
		transition: {
			duration: 0.3,
		},
	},
	animate: {
		opacity: 1,
		scale: 1,
		filter: 'blur(0px)',
		transition: {
			duration: 0.3,
		},
	},
}

export const Modal: FC<ModalProps> = ({
	className,
	children,
	isModalOpen,
	setIsModalOpen,
}) => {
	if (!isModalOpen) return null

	return ReactDOM.createPortal(
		<AnimatePresence>
			{isModalOpen && (
				<motion.div
					className={clsx(styles.modal, className)}
					onClick={() => setIsModalOpen(false)}
					variants={overlayVariants}
					initial='initial'
					animate='animate'
					exit='initial'
				>
					<motion.div
						className={styles.wrapper}
						onClick={(e) => e.stopPropagation()}
						variants={wrapperVariants}
						initial='initial'
						animate='animate'
						exit='initial'
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	)
}
