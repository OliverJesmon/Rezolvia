
import { motion } from 'framer-motion'
import ScriptEditor from '../components/editor.jsx'
function Hero() {
  return (
    <div>
        <section className="relative min-h-screen flex md:flex-col-2 items-center justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src='https://cdn.pixabay.com/photo/2020/04/02/22/05/home-office-4996834_960_720.jpg'
          alt="Hero Background"
          className="w-full h-full object-cover"
          oncontextmenu="return false;"
        />
       
      </div>
      <div className="relative z-10 px-6 " >
        <h1 className="md:text-[8vw] text-[4rem] text-red-700 font-Geometric Sans-Serif font-light leading-none mb-4">
          REZOLVIA 
        </h1>
        <h1 className="md:text-[4vw] text-[9vw] md:text-stone-50 text-black text-right font-Geometric Sans-Serif font-light leading-none mb-4">Software</h1>
        
      </div>
      
      <ScriptEditor />
      {/*Desktop */}
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block max-w-md mx-auto absolute bottom-10 right-10 z-10 text-white">
          <h2 className="text-xl font-medium mb-4">Empowering businesses through technology, innovation, and precision.</h2>
          <p className="text-sm opacity-80 mb-8">
            Welcome to Rezolvia Software, where timeless design, wellness-focused living, and cultural enrichment converge...
          </p>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:hidden block max-w-md mx-auto absolute bottom-10 left-5 z-10 text-white">
          <h2 className="text-xl font-medium mb-4">Empowering businesses through technology, innovation, and precision.</h2>
          <p className="text-sm opacity-80 mb-8">
            Welcome to Rezolvia Software, where timeless design, wellness-focused living, and cultural enrichment converge...
          </p>
          
        </motion.div>
    </section>
      
    </div>
  )
}

export default Hero
