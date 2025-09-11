"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import ContactForm from "../components/ContactForm"


export default function ComingSoon() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Logo Overlay */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BJu2zHwZmhVnhJ41vkmoGyOGw1uCTc.jpeg')",
          backgroundSize: "40%",
        }}
      />

      {/* Background Glow Circles */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-slate-400/10 blur-3xl top-10 left-5"
      />
      <motion.div
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-gray-300/10 blur-3xl bottom-10 right-5"
      />

      {/* Main Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-12 gap-10 z-10 min-h-screen">
        {/* Contact Form (Right on Desktop, Bottom on Mobile) */}
        <AnimatePresence mode="wait">
          {showForm && (
            <motion.div
              key="form"
              initial={{ x: 300, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 300, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-2"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md bg-slate-800/40 rounded-xl p-6 shadow-xl backdrop-blur-md"
              >
                <ContactForm />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: showForm ? 0.95 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`w-full ${showForm ? "lg:w-1/2" : "lg:w-full"} text-center lg:text-left order-1 lg:order-1 flex flex-col items-center lg:items-start`}
        >
          {/* Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white drop-shadow-2xl leading-tight tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
              Coming Soon!
            </span>
          </motion.h1>

          {/* Sub Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-white italic font-medium mb-4 tracking-wide"
          >
            <span className="bg-slate-900/60 px-3 py-1 rounded-lg backdrop-blur-sm">
              Excolutus = Latin for Refine
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 max-w-2xl leading-relaxed"
          >
            <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Refined Innovation in Technology
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(203,213,225,0.4)",
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(!showForm)}
            className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-slate-200 to-slate-100 text-slate-900 font-bold text-lg sm:text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-300/20 backdrop-blur-sm"
          >
            {showForm ? "Close" : "Contact Us"}
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-slate-400 text-xs sm:text-sm font-light tracking-wide text-center px-4"
      >
        © {new Date().getFullYear()} Excolutus. All rights reserved.
      </motion.footer>
    </section>
  )
}
