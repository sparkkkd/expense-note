import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@gravity-ui/uikit'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

import App from './App.tsx'

import '@gravity-ui/uikit/styles/fonts.css'
import '@gravity-ui/uikit/styles/styles.css'

import './styles.css'

createRoot(document.getElementById('root')!).render(
	<ThemeProvider theme='dark'>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
)
