import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import QueryClientSetUp from './QueryClientSetup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientSetUp>
    <App />
    </QueryClientSetUp>
  </React.StrictMode>,
)
