import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages'
import AppProviders from 'providers'
import 'i18n'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <AppProviders>
    <App />
  </AppProviders>
)
