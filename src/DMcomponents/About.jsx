// AboutSection.jsx
import { motion} from 'framer-motion';
import Photo from '../assets/logo.png';

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
            Where strategy meets creativity.
          </h2>
           
          <h2 className="text-4xl md:text-5xl ffont-geometric sans-serif font-light mb-6">Where brands evolve.</h2>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
          > {/*https://cdn.pixabay.com/video/2025/04/23/273921_large.mp4*/}
            <video autoPlay muted loop src='https://cdn.pixabay.com/video/2025/04/23/273921_large.mp4' alt="About Us" className="rounded-lg w-full h-auto" />
        </motion.div>
          <motion.div
  initial="hidden"
  whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <p className="text-sm opacity-80 mb-6">
            Rezolvia Digital Media is a full-service digital marketing agency delivering strategic, scalable, and measurable digital solutions for modern businesses. We partner with organizations to strengthen their digital presence, optimize performance, and drive sustainable growth in an increasingly competitive marketplace.
          </p>
          <p className="text-sm opacity-80 mb-6">
          Driven by insight and innovation, we design bespoke marketing solutions that enhance brand presence, strengthen audience engagement, and accelerate growth. Our expertise spans across digital advertising, brand positioning, content strategy, and performance marketing executed with precision and purpose.
 </p>
 <p className="text-sm opacity-80 mb-6">
          What sets us apart is our commitment to clarity, quality, and results. We don’t follow trends, we analyze, adapt, and lead. At Rezolvia Digital Media, every brand we work with receives a tailored strategy, meticulous execution, and a focus on long-term value creation.
 </p>
          
        </motion.div>

        
      </div>
    </section>
  );
};

export default AboutSection;