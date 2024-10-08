import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './src/components/Header/Header'
import Footer from './src/components/Footer/Footer'

function Layout() {
    return(
        <>
        <Header/>
        {/* jo bhi route banega wo oulte ko rreplace krega bas */}
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout