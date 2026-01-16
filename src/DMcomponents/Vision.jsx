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
          <video autoPlay muted loop src='https://cdn.pixabay.com/video/2017/11/29/13111-245530624_large.mp4' alt="Tech Innovation"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
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
            Where Vision Drives Digital Evolution
          </h2>

          {/* Body Text */}
          <p className="text-sm leading-relaxed mt-4">
            To be the catalyst for transformative digital growth—empowering forward-thinking brands to lead, innovate, and thrive in the digital era.
          </p>

          {/* CTA Button */}
          
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;