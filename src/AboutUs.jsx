// components/AboutUs.jsx
import { motion } from "framer-motion";
import Photo from "./assest/OurStory.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-cover bg-center" 
           style={{ backgroundImage: `url(${Photo})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl text-white mb-4 font-light tracking-tight" 
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
              Our <span className="italic font-semibold">Story</span>
            </h1>
            <div className="w-16 h-px bg-white/40 mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-20 md:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="text-black/40 text-[10px] tracking-[4px] uppercase font-medium">Our Heritage</span>
            <h2 className="text-3xl md:text-5xl text-black mt-3 mb-4 font-light tracking-tight" 
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
              A Legacy of <span className="italic font-semibold text-black/60">Flavors</span>
            </h2>
            <div className="w-12 h-px bg-black/20 mx-auto" />
          </motion.div>

          <motion.p variants={fadeInUp} className="text-black/50 leading-relaxed mb-6 text-base md:text-lg font-light" 
                    style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontSize: "clamp(1rem, 3vw, 18px)" }}>
            Founded in Lahore in 2012, Desi Zaika began as a small family kitchen with a big dream — to share the authentic, 
            soulful flavors of traditional Pakistani cuisine with the world. What started as a passion project by Chef Ahmed 
            Raza has grown into a beloved culinary destination.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-black/50 leading-relaxed text-base md:text-lg font-light" 
                    style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontSize: "clamp(1rem, 3vw, 18px)" }}>
            Our name, "Desi Zaika," translates to "local flavor" — a tribute to the rich culinary heritage of the Indian 
            subcontinent. Every recipe in our kitchen has been passed down through generations, carefully preserved and 
            perfected over time.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}