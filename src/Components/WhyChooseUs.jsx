import {
  FaClock,
  FaCar,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaClock />,
    title: "24 Hour Call-Outs",
    text: "Emergency roadside assistance whenever you need it.",
  },
  {
    icon: <FaCar />,
    title: "We Come To You",
    text: "Repairs completed at your home, workplace or roadside.",
  },
  {
    icon: <FaTools />,
    title: "Professional Repairs",
    text: "Servicing, diagnostics and repairs for most makes and models.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Honest Pricing",
    text: "Clear quotations with no hidden charges.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Workmanship",
    text: "Reliable repairs completed to a high standard.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Covering Medway",
    text: "Rochester, Chatham, Gillingham, Strood, Rainham and nearby areas.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#111] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-red-600 uppercase tracking-[3px] font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Reliable Mobile Mechanic Services You Can Trust
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            Medway Motorworks provides professional mobile vehicle repairs,
            servicing and diagnostics across Medway. We bring the garage to
            your home or workplace, saving you time while delivering honest,
            reliable service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-red-600 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-red-600 text-4xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;