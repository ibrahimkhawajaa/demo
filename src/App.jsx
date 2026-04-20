// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import MenuPage from "./MenuPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Aboutus from "./Aboutus.jsx";
import ContactUs from "./ContactUs.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;