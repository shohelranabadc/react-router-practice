import { NavLink } from "react-router";


const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-6 w-full">
      <NavLink
        to="/" className={({ isActive }) => isActive ? "text-white font-medium" : "text-yellow-500 font-medium" }>Home 
      </NavLink>
      <NavLink 
        to="/blog" className={({ isActive }) => isActive ? "text-white font-medium" : "text-yellow-500 font-medium"}>Blog
      </NavLink>
      <NavLink 
        to="/about" className={({ isActive }) => isActive ? "text-white font-medium" : "text-yellow-500 font-medium"}>About
      </NavLink>
      <NavLink
              to="/dashboard" className={({ isActive }) => isActive ? "text-white font-medium" : "text-yellow-500 font-medium" }>Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
