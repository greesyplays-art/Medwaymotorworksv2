import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-red-500 uppercase tracking-[4px] font-semibold mb-4"
        >
          24 Hour Mobile Mechanic
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black leading-tight text-white"
        >
          Mobile Mechanic
          <span className="block text-red-600">
            in Medway
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg md:text-xl leading-8"
        >
          Professional vehicle servicing, diagnostics and repairs carried out at
          your home, workplace or roadside. Available <strong>24 hours</strong>
          for emergency call-outs across Medway.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
        >
          <a
            href="tel:07424915670"
            className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3"
          >
            <FaPhoneAlt />
            Call 07424 915670
          </a>

          <a
            href="https://wa.me/447424915670"
            target="_blank"
            rel="noreferrer"
            className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3"
          >
            <IoLogoWhatsapp />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Trust Bar */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            "24 Hour Call-Outs",
            "Fully Mobile Service",
            "Honest Pricing",
            "Emergency Repairs",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur-md rounded-xl py-5 px-4"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="inline-flex items-center gap-3 mt-14 text-red-500 hover:text-red-400"
        >
          Explore Our Services
          <FaArrowRight />
        </motion.a>

      </div>
    </section>
  );
};

export default Hero;