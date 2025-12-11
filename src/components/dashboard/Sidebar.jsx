import React, { useState } from 'react'; // <-- useState ইম্পোর্ট করুন
import { NavLink } from 'react-router'; // (এখানে 'react-router' এর পরিবর্তে 'react-router-dom' ব্যবহার করা হয়েছে)

// পরিবর্তিত menuItems ডেটা স্ট্রাকচার
const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { 
    name: "Posts", 
    children: [ 
      { name: "All Posts", path: "/dashboard/post" },
      { name: "Add New Post", path: "/dashboard/post/add" },
      { name: "Categories", path: "/dashboard/post/categories" },
    ]
  },
  { name: "Users", path: "/dashboard/users" },
  { name: "Settings", path: "/dashboard/settings" },
  { name: "Website View", path: "/" },
];

const Sidebar = () => {
  // কোন মেনু আইটেমটি খোলা আছে, তা ট্র্যাক করার জন্য স্টেট
  // আমরা string ব্যবহার করছি, যাতে একসাথে একাধিক সাব-মেনু খোলা না যায়।
  const [openMenu, setOpenMenu] = useState(''); 

  const toggleSubMenu = (name) => {
    // যদি একই মেনুতে ক্লিক করা হয়, তাহলে বন্ধ করে দাও (টগল)
    if (openMenu === name) {
      setOpenMenu('');
    } else {
      // অন্যথায় নতুন মেনুটি খোলো
      setOpenMenu(name);
    }
  };

  const activeLinkClasses = "block py-3 px-4 bg-indigo-600 text-white border-l-4 border-indigo-300";
  const inactiveLinkClasses = "block py-3 px-4 text-gray-300 hover:bg-gray-800";
  const subMenuClasses = "block py-2 px-4 text-gray-400 hover:bg-gray-800 ml-4 border-l border-gray-600"; // সাব-মেনুর জন্য ভিন্ন স্টাইল

  return (
    <div className="" >
      {/* ... (Admin Panel Header) ... */}
      <div className="p-4 h-16 flex items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold text-indigo-400">Admin Panel</h1>
      </div>
      
      <nav className="mt-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              {/* যদি আইটেমের 'children' থাকে, তাহলে বাটন রেন্ডার করো (প্যারেন্ট মেনু) */}
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleSubMenu(item.name)}
                    className={`${inactiveLinkClasses} w-full text-left flex justify-between items-center`}
                  >
                    {item.name}
                    {/* সাব-মেনু খোলার Arrow Icon */}
                    <span className={`transform transition-transform ${openMenu === item.name ? 'rotate-90' : 'rotate-0'}`}>
                        ▶
                    </span>
                  </button>

                  {/* শর্তসাপেক্ষে সাব-মেনু রেন্ডারিং */}
                  {openMenu === item.name && (
                    <ul className="overflow-hidden">
                      {item.children.map((subItem) => (
                        <li key={subItem.name}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) => (
                              // সাব-মেনু আইটেমের জন্য আলাদা স্টাইল
                              isActive ? `${activeLinkClasses} ${subMenuClasses}` : subMenuClasses
                            )}
                            onClick={() => setOpenMenu('')} // ক্লিক করলে ড্রপডাউন বন্ধ করার জন্য
                          >
                            {subItem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                /* যদি 'children' না থাকে, তাহলে সরাসরি NavLink রেন্ডার করো */
                <NavLink
                  to={item.path}
                  className={({ isActive }) => isActive ? activeLinkClasses : inactiveLinkClasses}
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;