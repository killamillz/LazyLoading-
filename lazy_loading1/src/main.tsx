import React, { Suspense, lazy} from 'react'
import ReactDOM from 'react-dom/client'
const  App = lazy(()=> import('./App.tsx'));
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
