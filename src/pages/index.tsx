import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout'
import { appRoutes } from 'utils/appRoutes'
import Loader from 'components/Loader'
import Page404 from './Page404'

const LoadablePageComponent = (resource: string) => lazy(async () => await import(`./${resource}`))

const pages = [
  {
    id: 'ExplorerPage',
    path: appRoutes.explorer,
    component: LoadablePageComponent('ExplorerPage')
  }
]

const App: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Layout>
      <Suspense fallback={<Loader info={t('fallback.loadingPage')} />}>
        <Switch>
          {pages.map(({ id, component: Component, ...props }) => (
            <Route key={id} exact {...props}>
              <Component />
            </Route>
          ))}
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default App
