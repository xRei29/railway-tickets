import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BookingProvider } from './context/BookingContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BookingProvider на найвищому рівні — доступ до контексту без prop drilling */}
    <BookingProvider>
      <App />
    </BookingProvider>
  </React.StrictMode>
)
