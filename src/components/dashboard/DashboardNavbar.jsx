import React from 'react'
import { NavLink } from 'react-router'

const DashboardNavbar = () => {
  return (
    <nav className="flex justify-center items-center gap-6 w-full bg-gray-500">
        <NavLink
        to="/" className={({ isActive }) => isActive ? "text-white font-medium" : "text-yellow-500 font-medium" }>Home
      </NavLink>
      <NavLink
        to="/dashboard" className={({ isActive }) => isActive ? "text-white font-medium" : "text-yellow-500 font-medium" }>Dashboard
      </NavLink>
      <NavLink 
        to="/dashboard/post" className={({ isActive }) => isActive ? "text-white font-medium" : "text-yellow-500 font-medium"}>Posts
      </NavLink>
      <NavLink 
        to="/dashboard/settings" className={({ isActive }) => isActive ? "text-white font-medium" : "text-yellow-500 font-medium"}>Settings
      </NavLink>
    </nav>
  )
}

export default DashboardNavbar