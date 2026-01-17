import { motion } from "framer-motion";

const beliefs = [
  {
    "title": "1) STRATEGIC CLARITY",
    "desc": "Insight-led strategies that cut through noise and deliver measurable direction."
  },
  {
    "title": "2) SCALABLE IMPACT",
    "desc": "Marketing solutions designed to grow with your business—adapting, evolving, and accelerating results over time."
  },
  {
    "title": "3) CREATIVE INTELLIGENCE",
    "desc": "Where data meets creativity to craft compelling brand experiences that convert and endure."
  }
];

const MisionSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 text-white">
      
      <div className="grid grid-col md:grid-rows-3 gap-6 bg-[url('./assets/mission.jpg')] backdrop-blur-xl justify-center opacity-80 bg-cover bg-center p-35 rounded-xl" oncontextmenu="return false;">
        {beliefs.map((belief, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration:0.9, delay: i * 0.1 }}
        viewport={{ once: false }}
        className="hidden md:block bg-white/5 border border-white/10 backdrop-filter backdrop-blur-sm p-8 rounded-lg"
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
        viewport={{ once: false }}
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