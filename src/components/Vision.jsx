// src/components/VisionSection.jsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const VisionSection = () => {
  const navigate=useNavigate();
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 rounded-2xl overflow-hidden">
        
        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: false }}
          className="lg:w-1/2"
        >
          <img src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg" alt="Tech Innovation"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            oncontextmenu="return false;"
          />
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false }}
          className="lg:w-1/2 space-y-8 text-gray-300"
        >
          
          <h2 className="text-4xl md:text-5xl font-geometric sans-serif font-light leading-tight">
            A VISION OF INNOVATIVE SOFTWARE SOLUTIONS
          </h2>

          {/* Body Text */}
          <p className="text-sm leading-relaxed mt-4">
            To become a trusted technology partner for businesses worldwide by creating software that is intuitive, impactful, and future-ready—driving progress through innovation and excellence.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300" onClick={()=>navigate('#contact')}>
              BOOK A VISIT
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;