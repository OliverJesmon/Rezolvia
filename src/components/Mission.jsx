import { motion } from "framer-motion";

const beliefs = [
  {
    "title": "1)RELIABLE FOUNDATIONS",
    "desc": "Building software that stands strong under any load."
  },
  {
    "title": "2)SCALABLE GROWTH",
    "desc": "Systems that expand seamlessly as businesses evolve."
  },
  {
    "title": "3)INNOVATIVE SOLUTIONS",
    "desc": "Cutting-edge technology driving tomorrow's success."
  },
  {
    "title": "4)EFFICIENCY OPTIMIZED",
    "desc": "Streamlined operations for maximum productivity."
  },
  {
    "title": "5)DIGITAL EMPOWERMENT",
    "desc": "Sustainable growth in a connected world."
  }
];

const MisionSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 text-white">
      
      <div className="grid grid-col md:grid-cols-3 gap-6 bg-[url('./assets/mission.jpg')] backdrop-blur-xl justify-center opacity-80 bg-cover bg-center p-35 rounded-xl" oncontextmenu="return false;">
        {beliefs.map((belief, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="hidden md:block bg-white/5 border border-white/10 backdrop-filter backdrop-blur-sm p-6 rounded-lg"
      >
        <h3 className="text-lg font-medium mb-2">{belief.title}</h3>
        <p className="text-sm leading-relaxed">{belief.desc}</p>
      </motion.div>
    ))}
    {beliefs.map((belief, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="md:hidden bg-white/5 border border-white/10 backdrop-filter backdrop-blur-sm p-[2.5rem] rounded-lg"
      >
        <h3 className="text-lg font-medium mb-2">{belief.title}</h3>
        <p className="text-sm leading-relaxed">{belief.desc}</p>
      </motion.div>
    ))}
    
      </div>
    </section>
  );
};

export default MisionSection;