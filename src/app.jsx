import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        <WhyChooseUs />

        <Services />

        {/* Gallery Component */}

        {/* Emergency Call Out */}

        {/* Areas Covered */}

        {/* Google Reviews */}

        {/* FAQ */}

        {/* Contact Form */}
      </main>

      <Footer />
    </div>
  );
}

export default App;