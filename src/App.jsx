import { Route, Routes } from "react-router";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Home from "./pages/frontend/Home";
import Blog from "./pages/frontend/Blog";
import About from "./pages/frontend/About";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
