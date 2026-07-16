import { FaPhoneAlt, FaBolt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { motion } from "framer-motion";

const Emergency = () => {
  return (
    <section className="relative py-24 bg-red-700 overflow-hidden">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/emergency-bg.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="inline-flex items-center gap-3 bg-red-600 px-5 py-2 rounded-full mb-6">
            <FaBolt />
            <span className="font-semibold uppercase">
              Emergency Call-Out Service
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Broken Down?
          </h2>

          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-8 mb-10">
            Whether your vehicle won't start, your battery is flat,
            you've got warning lights on the dashboard or you've broken
            down unexpectedly, Medway Motorworks provides fast and reliable
            <strong> 24-hour mobile mechanic services </strong>
            across Medway.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-12">

            <div className="bg-white/10 rounded-xl py-5">
              🚗<br />
              Won't Start
            </div>

            <div className="bg-white/10 rounded-xl py-5">
              🔋<br />
              Flat Battery
            </div>

            <div className="bg-white/10 rounded-xl py-5">
              ⚠️<br />
              Warning Lights
            </div>

            <div className="bg-white/10 rounded-xl py-5">
              🔧<br />
              Emergency Repairs
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="tel:07424915670"
              className="bg-white text-red-700 hover:bg-gray-100 transition px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3"
            >
              <FaPhoneAlt />
              Call 07424 915670
            </a>

            <a
              href="https://wa.me/447424915670"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-white hover:bg-white hover:text-red-700 transition px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3"
            >
              <IoLogoWhatsapp />
              WhatsApp Us
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Emergency;