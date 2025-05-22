import styles from './App.module.sass'

import { Container } from './modules/Container/Container'
import { AddExpense } from './components/AddExpense/AddExpense'
import { ExpenseCardList } from './modules/ExpenseCardList/ExpenseCardList'

function App() {
	return (
		<Container>
			<main className={styles.main}>
				<AddExpense />
				<ExpenseCardList />
			</main>
		</Container>
	)
}

export default App
