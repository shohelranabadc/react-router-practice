import React from 'react'
import { NavLink } from 'react-router'


// ড্যাশবোর্ডের ভিতরের মেনুর ডেটা (আপনার রুটের সাথে মিল রেখে)
const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Posts", path: "/dashboard/post" },
  { name: "Settings", path: "/dashboard/settings" },
  { name: "Users", path: "/dashboard/users" },
];

const Sidebar = () => {
  return (
    <>
    {/* // ফিক্সড সাইডবার */}
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-20">
      <div className="p-4 h-16 flex items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold text-indigo-400">Admin Panel</h1>
      </div>
      
      {/* নেভিগেশন মেনু (aside navbar) */}
      <nav className="mt-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                // NavLink-এর isActive প্রপ ব্যবহার করে ডাইনামিক ক্লাস
                className={({ isActive }) => 
                  isActive 
                    ? "block py-3 px-4 bg-indigo-600 text-white border-l-4 border-indigo-300" 
                    : "block py-3 px-4 text-gray-300 hover:bg-gray-800"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
    </>
  )
}

export default Sidebar