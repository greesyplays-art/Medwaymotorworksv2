import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import WhyChooseUs from "./components/WhyChooseUs";
import Emergency from "./components/Emergency";

import Services from "./pages/Services";
import Repairs from "./pages/Repairs";
import MOT from "./pages/MOT";
import Areas from "./pages/Areas";
import Contact from "./pages/Contact";

function Home() {
  return (
    <>
      <Hero />

      <WhyChooseUs />

      <Emergency />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="bg-[#0D0D0D] text-white min-h-screen overflow-x-hidden">

        <Navbar />

        <main>
          <Routes>

            {/* Home Page */}
            <Route 
              path="/" 
              element={<Home />} 
            />

            {/* SEO Pages */}
            <Route 
              path="/services" 
              element={<Services />} 
            />

            <Route 
              path="/repairs" 
              element={<Repairs />} 
            />

            <Route 
              path="/mot" 
              element={<MOT />} 
            />

            <Route 
              path="/areas-covered" 
              element={<Areas />} 
            />

            <Route 
              path="/contact" 
              element={<Contact />} 
            />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;