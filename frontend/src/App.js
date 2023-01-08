import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact/Contact";
import Pricing from "./pages/Pricing/Pricing";
import Footer from "./components/Footer";
import Admin from "./pages/adminDashboard/Getposts";
import AdminContact from "./pages/adminContact/Getposts";

function App() {
  return (
    <>
      <Router>
        <div>
          <header>
            <Navbar />
          </header>

          <section>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/pricing" element={<Pricing />}></Route>
              <Route path="/faq" element={<Faq />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/order" element={<Order />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/adminContact" element={<AdminContact />}></Route>
            </Routes>
          </section>

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
