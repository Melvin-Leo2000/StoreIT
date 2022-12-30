import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Thanks from "./pages/Thanks";
import Footer from "./components/Footer";

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
              <Route path="/thanks" element={<Thanks />}></Route>
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
