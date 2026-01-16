// AboutSection.jsx
import { motion} from 'framer-motion';
import Photo from '../assets/logo.png';
import GLBViewer from './Scene';
const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 text-white">
      <div className="flex flex-col lg:flex-row items-center gap-12 relative">
        
        <motion.div
  initial="hidden"
  whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 ">
          <h2 className="text-4xl md:text-5xl font-geometric sans-serif font-light mb-6">
            Empowering businesses through 
          </h2>
           
          <h2 className="text-4xl md:text-5xl ffont-geometric sans-serif font-light mb-6"><span className="hover:text-red-700"> technology,</span> <span className="hover:text-green-00">innovation,</span> and <span className="hover:text-yellow-400">precision.</span></h2>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          >
  <GLBViewer />
        </motion.div>
          <motion.div
  initial="hidden"
  whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <p className="text-sm opacity-80 mb-6">
            We are a technology-driven software company focused on delivering reliable, scalable, and secure digital solutions for modern businesses. Our mission is to help organizations streamline operations, enhance productivity, and achieve sustainable growth through innovative software solutions.
          </p>
          <p className="text-sm opacity-80 mb-6">
          With a strong foundation in engineering excellence and industry best practices, we design and develop software that aligns with business objectives and adapts to evolving technological needs. Our solutions are built with precision, performance, and long-term value in mind.
 </p>
 <p className="text-sm opacity-80 mb-6">
          We believe successful software is not just about functionality, but about reliability, efficiency, and user experience. Through structured processes, transparent collaboration, and continuous improvement, we partner with clients to deliver solutions they can trust.
 </p>
          
        </motion.div>

        
      </div>
    </section>
  );
};

export default AboutSection;