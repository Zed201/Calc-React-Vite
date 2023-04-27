import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Ctx} from "./assets/context.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Ctx>
      <App />
    </Ctx>
  </React.StrictMode>,
)
