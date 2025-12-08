import React from 'react'
import { Outlet } from 'react-router'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import Sidebar from '../components/dashboard/Sidebar'


const DashboardLayout = () => {
  return (
    <>

   <div className="flex min-h-screen">
      {/* বাম পাশের সাইডবার (স্থির থাকবে) */}
      <aside className="w-64 bg-gray-800 text-white">
        <DashboardHeader />
      </aside>
      
      {/* প্রধান কন্টেন্ট এরিয়া */}
      <main className="flex-grow p-2">
        {/* এখানে Header থাকতে পারে */}
        <Sidebar />
        
        
        {/* 🔥 চাইল্ড রুট কম্পোনেন্ট এখানেই রেন্ডার হবে 🔥 */}
        <Outlet /> 
        
      </main>
    </div>
    
    
    </>
    
  )
}

export default DashboardLayout