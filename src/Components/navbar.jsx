import { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}

        <a href="/" className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="Medway Motorworks"
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-white font-bold text-xl uppercase tracking-wide">
              Medway Motorworks
            </h1>

            <p className="text-red-500 text-sm">
              24 Hour Mobile Mechanics
            </p>
          </div>

        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          <a href="#home" className="hover:text-red-500 transition">
            Home
          </a>

          <a href="#services" className="hover:text-red-500 transition">
            Services
          </a>

          <a href="#gallery" className="hover:text-red-500 transition">
            Gallery
          </a>

          <a href="#areas" className="hover:text-red-500 transition">
            Areas
          </a>

          <a href="#contact" className="hover:text-red-500 transition">
            Contact
          </a>

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          <a
            href="https://wa.me/447424915670"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-full flex items-center gap-2"
          >
            <IoLogoWhatsapp />

            WhatsApp
          </a>

          <a
            href="tel:07424915670"
            className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
          >
            <FaPhoneAlt />

            Call Now
          </a>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-[#151515] px-6 pb-6">

          <div className="flex flex-col gap-5">

            <a href="#home">Home</a>

            <a href="#services">Services</a>

            <a href="#gallery">Gallery</a>

            <a href="#areas">Areas Covered</a>

            <a href="#contact">Contact</a>

            <a
              href="https://wa.me/447424915670"
              className="bg-green-600 py-3 rounded-lg text-center"
            >
              WhatsApp
            </a>

            <a
              href="tel:07424915670"
              className="bg-red-600 py-3 rounded-lg text-center"
            >
              Call 07424 915670
            </a>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;