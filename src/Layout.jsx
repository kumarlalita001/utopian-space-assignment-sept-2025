import React from 'react'
import { Header } from './components/common/Header'
import Footer from './components/common/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
