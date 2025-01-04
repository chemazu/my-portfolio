import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import "./App.css";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
