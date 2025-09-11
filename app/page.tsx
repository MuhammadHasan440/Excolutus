"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import ContactForm from "../components/ContactForm"

export default function ComingSoon() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-3 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BJu2zHwZmhVnhJ41vkmoGyOGw1uCTc.jpeg')",
          backgroundSize: "40%",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.01, 0.03, 0.01],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] rounded-full bg-slate-400/3 blur-3xl top-10 left-5 md:top-20 md:left-10"
      />

      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.01, 0.02, 0.01],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gray-300/3 blur-3xl bottom-5 right-5 md:bottom-10 md:right-10"
      />

      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center z-10 px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
          <AnimatePresence mode="wait">
            {showForm && (
              <motion.div
                initial={{
                  x: -400,
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  x: -400,
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="w-full lg:w-[45%] flex justify-center items-center order-2 lg:order-1"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="w-full max-w-md"
                >
                  <ContactForm />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              x: showForm ? 0 : 0,
              scale: showForm ? 0.95 : 1,
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`${showForm ? "w-full lg:w-[55%]" : "w-full"} text-center ${
              showForm ? "lg:text-left" : ""
            } transition-all duration-600 flex flex-col justify-center items-center ${
              showForm ? "lg:items-start" : ""
            } order-1 lg:order-2`}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="mb-8"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removebg-preview-ZG0VfDI6oGl7RB2EDo1NcuKpQlzT48.png"
                alt="Excolutus Logo"
                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto mx-auto drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white drop-shadow-2xl leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                  Coming Soon!
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-white italic font-medium mb-4 tracking-wide relative"
              style={{
                textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 16px rgba(0,0,0,0.6)",
              }}
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(203,213,225,0.4)",
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                  y: 0,
                }}
                onClick={() => setShowForm(!showForm)}
                className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-slate-200 to-slate-100 text-slate-900 font-bold text-lg sm:text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-300/20 backdrop-blur-sm overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 tracking-wide">{showForm ? "Close" : "Contact Us"}</span>
              </motion.button>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/4 w-2 h-2 bg-slate-400/30 rounded-full blur-sm hidden lg:block"
            />

            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-slate-300/40 rounded-full blur-sm hidden lg:block"
            />
          </motion.div>
        </div>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-slate-400 text-xs sm:text-sm font-light tracking-wide text-center px-4"
      >
        © {new Date().getFullYear()} Excolutus. All rights reserved.
      </motion.footer>
    </section>
  )
}
