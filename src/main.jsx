import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'lenis/dist/lenis.css'
import './tailwind.css'
import { ThemeProvider } from '@cspl-cars24/theme-v2'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="cars24" syncToDocument>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
