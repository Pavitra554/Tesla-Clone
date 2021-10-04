import React from 'react'
import NavBar from './NavBar'

function Layout({children}) {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout
