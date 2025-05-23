import styles from './App.module.sass'

import { Container } from './modules/Container/Container'
import { AddExpense } from './components/AddExpense/AddExpense'
import { ExpenseCardList } from './modules/ExpenseCardList/ExpenseCardList'
import { Filters } from './modules/Filters/Filters'

function App() {
	return (
		<Container>
			<main className={styles.main}>
				<AddExpense />
				<Filters />
				<ExpenseCardList />
			</main>
		</Container>
	)
}

export default App
