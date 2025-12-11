import React, { useState } from "react";
import { Outlet } from "react-router";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardFooter from "../components/dashboard/DashboardFooter";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    // Root Container
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar container */}
      <aside className={`
          bg-gray-900 text-white 
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-64' : 'w-0'}
          overflow-hidden z-40
        `}>

          <div className="w-64">
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>
        
      </aside>

        {/* content container */}
      <main className="flex-1 flex flex-col">
        {/* Header, Sidebar টগল করার ফাংশন পাস করছে */}
        <header className="sticky top-0 z-30 bg-white shadow">
          <DashboardHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </header>
        

        {/* মূল কন্টেন্ট এরিয়া */}
        {/* ml-64 এবং pt-16 শুধুমাত্র lg (Large) স্ক্রিন থেকে কার্যকর হবে */}
        <section className="flex-1 p-4 overflow-auto">
          <Outlet />
        </section>

        {/* Footer */}
        <footer 
          className="bg-white border-t border-gray-200 py-4 px-6 mt-auto"
          role="contentinfo"
        >
          <DashboardFooter />
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;
