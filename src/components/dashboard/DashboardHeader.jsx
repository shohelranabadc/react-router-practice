import React from 'react'
import DashboardNavbar from './DashboardNavbar'




const DashboardHeader = () => {
  return (
    <>
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-10 lg:pl-64">
      <div className="flex justify-between items-center h-full px-4">
        <h2 className="text-xl font-semibold text-gray-800">ড্যাশবোর্ড</h2>
        {/* ডান পাশের ছোট navbar বা ইউজার আইকন */}
        <div className="flex items-center space-x-4">
          <span className="text-sm">ইউজার নাম</span>
          <div className="h-8 w-8 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </header>
    <DashboardNavbar />
    </>
  )
}

export default DashboardHeader