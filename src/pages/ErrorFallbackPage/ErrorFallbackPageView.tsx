import React from 'react'
import { withRouter } from 'react-router-dom'
import type { RouteComponentProps } from 'react-router-dom'

interface ErrorFallbackPageViewProps {
  children: React.ReactNode
  location: string
}

interface PrevProps {
  location: string
}

class ErrorFallbackPageView extends React.Component<ErrorFallbackPageViewProps & RouteComponentProps> {
  static getDerivedStateFromError () {
    return { hasError: true }
  }

  state = {
    hasError: false
  }

  componentDidUpdate (prevProps: PrevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({
        hasError: false
      })
    }
  }

  render () {
    if (!this.state.hasError) {
      return this.props.children
    }

    return <p>Ooops, something went wrong!</p>
  }
}

export default withRouter(ErrorFallbackPageView)
