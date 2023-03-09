import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { Main, Layout, Content } from './Layout.styles'

interface LayoutViewProps {
  children: React.ReactNode
}

const LayoutView: React.FC<LayoutViewProps> = ({ children }) => (
  <Layout>
    <Header />
    <Main>
      <Content>
        {children}
      </Content>
    </Main>
    <Footer />
  </Layout>
)

export default LayoutView
