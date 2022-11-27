import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import Portfolio from "../components/pages/portfolio/Portfolio";
import Contact from "../components/pages/contact/Contact";
import NotFound from "../components/pages/error/NotFound";

export default function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
