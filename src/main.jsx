import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import TopBar from './components/TopBar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopBar />
    <App />
  </React.StrictMode>
)
