import React, { ReactNode } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="responsiveness">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
