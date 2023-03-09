import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Global } from '@emotion/react'
import { ToastProvider } from 'react-toast-notifications'

import globalStyles from 'styles/global'
import ErrorFallback from 'pages/ErrorFallbackPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

interface Props {
  children: React.ReactNode
}

const AppProviders: React.FC<Props> = ({ children }) => (
  <BrowserRouter>
    <ErrorFallback>
      <QueryClientProvider client={queryClient}>
        <ToastProvider autoDismiss autoDismissTimeout={5000}>
          <Global styles={globalStyles} />
          {children}
        </ToastProvider>
      </QueryClientProvider>
    </ErrorFallback>
  </BrowserRouter>
)

export default AppProviders
