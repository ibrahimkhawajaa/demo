// components/Hero.jsx
import { Link } from "react-router-dom";
import Vid from "./assest/vid.mp4";
import Vid1 from "./assest/vid1.mp4";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const menuItems = [
  { num: "01", name: "Karahi Gosht", price: "Rs. 1,200" },
  { num: "02", name: "Dum Biryani", price: "Rs. 950" },
  { num: "03", name: "Nihari", price: "Rs. 850" },
  { num: "04", name: "Chapli Kebab", price: "Rs. 600" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }} 
      className="bg-white min-h-screen md:h-[86vh] overflow-y-auto md:overflow-hidden flex flex-col"
    >
      {/* ── HERO ── */}
      <div className="flex flex-col md:flex-row flex-1 min-h-0">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex-1 flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-6 md:py-8 relative z-10"
        >
          {/* Label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 flex-shrink-0">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 28 }}
              transition={{ duration: 0.8 }}
              className="w-7 h-px bg-black/40"
            />
            <span className="text-black/40 text-[10px] sm:text-[11px] tracking-[3px] sm:tracking-[4px] uppercase font-medium">
              Lahore · Est. 2012
            </span>
          </motion.div>

          {/* Heading */}
          <div className="flex flex-col justify-center py-3 sm:py-4">
            <motion.span 
              variants={fadeInUp}
              className="text-black/30 text-lg sm:text-xl md:text-2xl lg:text-3xl italic mb-1 font-light"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              the art of
            </motion.span>
            <motion.span 
              variants={fadeInUp}
              className="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] leading-[1.05] tracking-[-2px] sm:tracking-[-3px] font-light"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 300 }}
            >
              Desi
            </motion.span>
            <motion.span 
              variants={fadeInUp}
              whileHover={{ scale: isMobile ? 1 : 1.02 }}
              className="text-black/50 italic leading-[1.05] tracking-[-2px] sm:tracking-[-3px] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 600 }}
            >
              Zaika
            </motion.span>
            <motion.p 
              variants={fadeInUp}
              className="text-black/50 mt-3 max-w-sm leading-relaxed text-xs sm:text-sm md:text-base"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontSize: "clamp(0.8rem, 3vw, 17px)", fontStyle: "italic" }}
            >
              Slow fire. Deep spice. Recipes passed down through generations — now served to yours.
            </motion.p>
          </div>

          {/* Bottom */}
          <motion.div variants={fadeInUp} className="flex-shrink-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <Link to="/menu" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-6 py-2.5 text-[10px] font-semibold tracking-[3px] uppercase rounded-none hover:bg-black/80 transition-all duration-300 w-full sm:w-auto"
                >
                  View full menu
                </motion.button>
              </Link>
              <div className="hidden sm:block w-px h-6 bg-black/10" />
              <motion.button 
                whileHover={{ x: isMobile ? 0 : 5 }}
                className="flex items-center justify-center sm:justify-start gap-3 text-black/40 text-[10px] font-medium tracking-[3px] uppercase hover:text-black/60 transition-colors"
              >
                Reserve a table
                <div className="relative w-6 h-px bg-black/30">
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -right-px -top-[3px] w-1.5 h-1.5 border-r border-t border-black/30 rotate-45 block"
                  />
                </div>
              </motion.button>
            </div>

            {/* Stats - Made responsive with grid on mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-4 sm:gap-6 mt-6">
              {[
                { n: "80+", l: "Signature Dishes" },
                { n: "4.9", l: "Google Rating" },
                { n: "12+", l: "Years of Legacy" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className={`${i < 2 && i !== 1 ? "border-r border-black/10 pr-4" : ""} ${i === 1 ? "border-r border-black/10 pr-4 sm:pr-6 sm:mr-6" : ""}`}
                >
                  <div
                    className="text-black leading-none text-2xl md:text-3xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", fontWeight: 300 }}
                  >
                    {s.n}
                  </div>
                  <div className="text-black/40 text-[8px] tracking-[1px] sm:tracking-[2px] uppercase mt-1 font-medium">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — video grid - Stack on mobile */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 grid-rows-auto sm:grid-rows-2 gap-[2px] min-h-0 mt-4 md:mt-0"
        >
          {/* First video - full width on mobile, row-span on desktop */}
          <div className={`${!isMobile ? 'sm:row-span-2' : ''} bg-black/5 relative overflow-hidden aspect-video sm:aspect-auto`}>
            <video
              src={Vid1}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-black/10 px-2 py-1 rounded-sm text-[8px] tracking-[2px] uppercase text-black/70 font-medium">
              Karahi Gosht
            </div>
          </div>
          
          {/* Second video */}
          <div className="bg-black/5 relative overflow-hidden aspect-video sm:aspect-auto">
            <video
              src={Vid}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-black/10 px-2 py-1 rounded-sm text-[8px] tracking-[2px] uppercase text-black/70 font-medium">
              Dum Biryani
            </div>
          </div>
          
          {/* Third video */}
          <div className="bg-black/5 relative overflow-hidden aspect-video sm:aspect-auto">
            <video
              src={Vid}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-black/10 px-2 py-1 rounded-sm text-[8px] tracking-[2px] uppercase text-black/70 font-medium">
              Fresh Naan
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── MENU CHAIN STRIP - Made horizontally scrollable on mobile ── */}
      <div className="bg-black/5 border-t border-black/10 flex flex-col sm:flex-row items-stretch flex-shrink-0">
        <div className="text-[9px] font-semibold tracking-[4px] uppercase text-black/40 px-5 py-3 border-b sm:border-b-0 sm:border-r border-black/10 flex items-center whitespace-nowrap justify-center bg-black/5">
          Signature menu
        </div>
        <div className="flex items-stretch flex-1 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-black/5 scrollbar-thumb-black/20">
          <div className="flex sm:flex-1">
            {menuItems.map((item) => (
              <div key={item.num} className="h-full">
                <Link
                  to="/menu"
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 border-r border-black/10 group cursor-pointer flex-shrink-0 h-full hover:bg-black/5 transition-colors"
                >
                  <span className="text-black/30 text-[10px] sm:text-[11px] tracking-wide font-mono">
                    {item.num}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-black/20 flex-shrink-0" />
                  <span
                    className="text-black/60 whitespace-nowrap group-hover:text-black transition-colors text-xs sm:text-sm md:text-base font-medium"
                    style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                  >
                    {item.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-black/40 whitespace-nowrap font-mono tracking-wide">
                    {item.price}
                  </span>
                </Link>
              </div>
            ))}
            <div className="h-full">
              <Link
                to="/menu"
                className="flex items-center gap-2 sm:gap-3 pl-3 sm:pl-5 pr-4 sm:pr-6 cursor-pointer flex-shrink-0 h-full hover:bg-black/5 transition-colors"
              >
                <span className="text-black/50 text-[9px] font-semibold tracking-[2px] sm:tracking-[3px] uppercase whitespace-nowrap">
                  View all → 
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 3px;
        }
        .scrollbar-track-black\/5::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        .scrollbar-thumb-black\/20::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}