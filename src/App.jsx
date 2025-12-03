import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/main/Home";
import Blog from "./pages/main/Blog";
import About from "./pages/main/About";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>

        {/* ---------- Frontend Layout ---------- */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* ---------- Dashboard / Backend Layout ---------- */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<div>Dashboard Home</div>} />
          {/* Example */}
          {/* <Route path="users" element={<Users />} /> */}
        </Route>

      </Routes>
    </div>
  );
}

export default App;
