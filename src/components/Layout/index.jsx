import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../Footer'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by Suyash Shekhar" />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
