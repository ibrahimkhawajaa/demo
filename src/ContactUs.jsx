// components/ContactUs.jsx
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white pt-20"
    >
      {/* Hero Section */}
      <div
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1
              className="text-5xl md:text-7xl font-serif text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact <span className="italic">Us</span>
            </h1>
            <div className="w-20 h-px bg-white/50 mx-auto" />
          </motion.div>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="text-black/50 text-[10px] tracking-[4px] uppercase">
                Get in Touch
              </span>
              <h2
                className="text-3xl md:text-4xl font-serif text-black mt-3 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We'd Love to <span className="italic text-black/60">Hear</span>{" "}
                From You
              </h2>
              <div className="w-16 h-px bg-black/20 mb-6" />
              <p className="text-black/60 leading-relaxed">
                Whether you have a question about our menu, want to make a
                reservation, or simply want to share your dining experience —
                we're here for you.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-black/5 flex items-center justify-center rounded-full flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-black/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-black font-medium text-[11px] tracking-[2px] uppercase mb-1">
                    Visit Us
                  </h3>
                  <p className="text-black/60 text-sm">
                    123 Food Street, Gulberg III
                    <br />
                    Lahore, Pakistan 54000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-black/5 flex items-center justify-center rounded-full flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-black/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-black font-medium text-[11px] tracking-[2px] uppercase mb-1">
                    Call Us
                  </h3>
                  <p className="text-black/60 text-sm">
                    +92 42 123 4567
                    <br />
                    +92 300 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-black/5 flex items-center justify-center rounded-full flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-black/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-black font-medium text-[11px] tracking-[2px] uppercase mb-1">
                    Email Us
                  </h3>
                  <p className="text-black/60 text-sm">
                    hello@desizaika.com
                    <br />
                    reservations@desizaika.com
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <h3 className="text-black font-medium text-[11px] tracking-[2px] uppercase mb-3">
                Opening Hours
              </h3>
              <div className="space-y-1 text-black/60 text-sm">
                <p>Monday - Thursday: 12:00 PM - 11:00 PM</p>
                <p>Friday - Sunday: 12:00 PM - 12:00 AM</p>
                <p className="text-black/40 text-[10px] mt-2">
                  *Kitchen closes 30 minutes before closing time
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-black/60 text-[10px] tracking-[2px] uppercase mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-black/20 py-3 focus:outline-none focus:border-black/60 transition-colors bg-transparent text-black"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-black/60 text-[10px] tracking-[2px] uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-black/20 py-3 focus:outline-none focus:border-black/60 transition-colors bg-transparent text-black"
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label className="block text-black/60 text-[10px] tracking-[2px] uppercase mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-black/20 py-3 focus:outline-none focus:border-black/60 transition-colors bg-transparent text-black"
                  placeholder="+92 XXX XXXXXXX"
                />
              </div>

              <div>
                <label className="block text-black/60 text-[10px] tracking-[2px] uppercase mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border border-black/20 p-3 focus:outline-none focus:border-black/60 transition-colors bg-transparent text-black resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 text-[11px] tracking-[3px] uppercase hover:bg-black/80 transition-all"
              >
                Send Message
              </button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 text-sm py-2"
                >
                  Thank you! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217400.94762582594!2d74.200000!3d31.483333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e4f0c6d9%3A0x9f8c0b6e1c8e5e0!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Restaurant Location"
        />
      </div>
    </motion.div>
  );
}
