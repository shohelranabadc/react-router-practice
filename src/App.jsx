import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/main/Home";
import Blog from "./pages/main/Blog";
import About from "./pages/main/About";
import Posts from "./pages/dashboard/Posts";
import Settings from "./pages/dashboard/Settings";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Users from "./pages/dashboard/Users";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>

        {/* ---------- Frontend Main Layout ---------- */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* ---------- Dashboard / Backend Layout ---------- */}
        {/* এখানে dashboard layout হলো parant element এবং পরবর্তী element হলো child element তাই outlet ব্যবহার করতে হবে */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="post" element={<Posts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
