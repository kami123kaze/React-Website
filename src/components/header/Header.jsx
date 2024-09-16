import React from 'react'
import {Link,NavLink, }from 'react-router-dom'

function Header() {
  return (
    <>
        <header className='flex flex-wrap justify-between items-center space-x-4 p-5    shadow sticky z-50 top-0 "bg-white border-gray-200 px-4 lg:px-6 bg-slate-300 hover:bg-slate-400'>
            <div className=' border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  hover:underline'>
                Logo
            </div>
        <div className='flex space-x-4 '>
            <div className=' border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-01 hover:underline'>
                <NavLink 
                to="/Password-Generator"
                className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 
                ${isActive ?"text-orange-700"  :"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                
                >Password-gen</NavLink>
            </div>
            <div className=' border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:underline'>
                <NavLink
                to="/About"
                className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 
                ${isActive ?"text-orange-700"  :"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                >
                About
                </NavLink>
            </div>
            <div className=' border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0  hover:underline'>
                Soduko-Solver
            </div>
            <div>
                
            </div>
        </div>
        </header>
    </>
  )
}

export default Header