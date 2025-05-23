import styles from './App.module.sass'

import { Toaster } from 'sonner'
import { Container } from './modules/Container/Container'
import { AddExpense } from './components/AddExpense/AddExpense'
import { ExpenseCardList } from './modules/ExpenseCardList/ExpenseCardList'
import { Filters } from './modules/Filters/Filters'

function App() {
	return (
		<>
			<Toaster
				richColors
				toastOptions={{
					style: {
						height: '100px',
						background: '#15161C',
						color: '#fff',
						border: 'none',
						padding: '16px',
					},
				}}
			/>
			<Container>
				<main className={styles.main}>
					<AddExpense />
					<Filters />
					<ExpenseCardList />
				</main>
			</Container>
		</>
	)
}

export default App
