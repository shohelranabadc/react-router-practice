import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import { Menu, X } from 'lucide-react';




const DashboardHeader = ({isSidebarOpen, setIsSidebarOpen}) => {
  return (
    
      <div className="flex justify-between items-center h-full px-4">
        <div className='flex gap-2'>
          <button onClick={() => {setIsSidebarOpen(!isSidebarOpen)}} className="p-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
              <Menu />
          </button>
          
        <h2 className="text-xl font-semibold text-gray-800">ড্যাশবোর্ড</h2>
        </div>
        
        
        {/* ডান পাশের ইউজার আইকন বা মেনু */}
        <div className="flex items-center space-x-4">
          <span className="text-sm">ইউজার নাম</span>
          <div className="h-8 w-8 rounded-full bg-gray-400"></div>
        </div>
      </div>
  );
}

export default DashboardHeader