import React, { lazy, Suspense } from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
const App = lazy(() => import ('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<BrowserRouter>
		<Suspense fallback='loading...'>
			<App />
		 </Suspense>
	</BrowserRouter>
  </React.StrictMode>,
)
