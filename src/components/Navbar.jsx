import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='h-20 bg-gray-500 flex items-center justify-center'>
            <div>
                <ul className='flex gap-3'>
                    <li><Link className='text-lg font-semibold hover:text-white transition duration-300' to='/registration'>Registration</Link></li>
                    <li><Link className='text-lg font-semibold hover:text-white transition duration-300' to='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar