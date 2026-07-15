import {
  FaCar,
  FaTools,
  FaCarBattery,
  FaCogs,
  FaOilCan,
  FaExclamationTriangle,
  FaCarCrash,
  FaWrench,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaOilCan />,
    title: "Car Servicing",
    description:
      "Interim, full and major servicing completed at your home or workplace.",
  },
  {
    icon: <FaTools />,
    title: "Vehicle Diagnostics",
    description:
      "Engine management lights, warning lights and fault finding using professional diagnostic equipment.",
  },
  {
    icon: <FaCarCrash />,
    title: "Brake Repairs",
    description:
      "Brake discs, brake pads and complete braking system repairs.",
  },
  {
    icon: <FaCogs />,
    title: "Clutch Replacement",
    description:
      "Professional clutch replacement for most makes and models.",
  },
  {
    icon: <FaWrench />,
    title: "Timing Belt Replacement",
    description:
      "Manufacturer-recommended timing belt replacement using quality parts.",
  },
  {
    icon: <FaCarBattery />,
    title: "Battery Replacement",
    description:
      "Supply and fit batteries wherever your vehicle is located.",
  },
  {
    icon: <FaCar />,
    title: "Exhaust Repairs",
    description:
      "Exhaust repairs and replacement systems for all vehicle types.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "MOT & Pre-MOT Repairs",
    description:
      "Helping your vehicle pass its MOT with confidence.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#0d0d0d] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-red-600 uppercase tracking-[3px] font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Mobile Vehicle Repairs Across Medway
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            We provide professional mobile vehicle repairs and servicing
            throughout Medway, helping keep your car safe, reliable and back on
            the road.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#181818] rounded-2xl p-8 border border-gray-800 hover:border-red-600 hover:-translate-y-2 transition duration-300 group cursor-pointer"
            >
              <div className="text-red-600 text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {service.description}
              </p>

              <span className="inline-flex items-center gap-2 text-red-500 font-semibold">
                Learn More
                <FaArrowRight />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;