// MenuPage.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fullMenu = [
  { id: 1, name: "Karahi Gosht", description: "Slow-cooked lamb in aromatic spices, finished with ginger & green chili", price: "Rs. 1,200", category: "Signature" },
  { id: 2, name: "Dum Biryani", description: "Layered basmati rice with tender chicken, saffron & caramelized onions", price: "Rs. 950", category: "Rice" },
  { id: 3, name: "Nihari", description: "Overnight simmered beef shank with bone marrow & traditional nihari masala", price: "Rs. 850", category: "Stew" },
  { id: 4, name: "Chapli Kebab", description: "Hand-pounded minced meat, wheat germ, pomegranate seeds & coriander", price: "Rs. 600", category: "Grill"},
  { id: 5, name: "Butter Chicken", description: "Creamy tomato gravy with tandoori chicken & fenugreek leaves", price: "Rs. 1,100", category: "Curry"},
  { id: 6, name: "Tandoori Roti", description: "Whole wheat bread baked in clay oven with a crispy edge", price: "Rs. 50", category: "Bread"},
  { id: 7, name: "Garlic Naan", description: "Leavened bread topped with fresh garlic & cilantro", price: "Rs. 80", category: "Bread"},
  { id: 8, name: "Seekh Kebab", description: "Minced lamb with green chilies & secret spice blend", price: "Rs. 750", category: "Grill"},
  { id: 9, name: "Daal Makhani", description: "Black lentils simmered overnight with cream & butter", price: "Rs. 550", category: "Vegetarian"},
  { id: 10, name: "Gulab Jamun", description: "Soft milk solids dumplings soaked in rose-scented sugar syrup", price: "Rs. 250", category: "Dessert", spice: "Sweet" },
];

export default function MenuPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-12 h-px bg-black/20" />
            <span className="text-black/50 text-[10px] tracking-[4px] uppercase">Our Culinary Art</span>
            <div className="w-12 h-px bg-black/20" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            The <span className="">Menu</span>
          </h1>
          <p className="text-black/50 max-w-2xl mx-auto font-light">
            Each dish is crafted with passion, using time-honored recipes and the finest ingredients
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {fullMenu.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ x: 8 }}
              className="group border-b border-black/10 pb-6 hover:border-black/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-black/50 text-[9px] tracking-[3px] uppercase">{item.category}</span>
                    <span className="text-black/30 text-xs">{item.spice}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-black group-hover:text-black/70 transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="text-right ml-4">
                  <span className="text-black/70 text-xl font-light block mb-2">{item.price}</span>
                  <button className="text-black/30 hover:text-black text-[9px] tracking-[2px] uppercase transition-colors">
                    Order →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors text-[10px] tracking-[3px] uppercase">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}