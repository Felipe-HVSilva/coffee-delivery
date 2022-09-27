import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
