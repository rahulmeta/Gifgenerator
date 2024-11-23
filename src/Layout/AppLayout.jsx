import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const AppLayout = () => {
    return (
        <div className='bg-zinc-950 min-h-screen text-white'>
            <div className="container px-6 py-4 mx-auto">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AppLayout
