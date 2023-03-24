import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TaskContextProvider} from './context/Taskcontext'
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
