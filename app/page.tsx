"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import ContactForm from "../components/ContactForm"

export default function ComingSoon() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BJu2zHwZmhVnhJ41vkmoGyOGw1uCTc.jpeg')",
          backgroundSize: "50%",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-slate-400/5 to-blue-400/5 blur-3xl top-10 left-5 md:top-20 md:left-10"
      />

      <motion.div
        animate={{
          scale: [1.02, 1, 1.02],
          opacity: [0.02, 0.03, 0.02],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-l from-indigo-400/5 to-slate-400/5 blur-3xl bottom-5 right-5 md:bottom-10 md:right-10"
      />

      <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16">
          <AnimatePresence mode="wait">
            {showForm && (
              <motion.div
                initial={{
                  x: -300,
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  x: -300,
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
                className="w-full lg:w-[45%] flex justify-center items-center order-2 lg:order-1"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                    delay: 0.1,
                  }}
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
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className={`${showForm ? "w-full lg:w-[55%]" : "w-full"} text-center ${
              showForm ? "lg:text-left" : ""
            } transition-all duration-500 flex flex-col justify-center items-center ${
              showForm ? "lg:items-start" : ""
            } order-1 lg:order-2`}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.1,
              }}
              className="mb-12"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-removebg-preview-ZG0VfDI6oGl7RB2EDo1NcuKpQlzT48.png"
                alt="Excolutus Logo"
                className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto mx-auto drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.3,
              }}
              className="mb-8"
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
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 max-w-2xl leading-relaxed"
            >
              <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent ">
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
                  boxShadow: "0 25px 50px rgba(203,213,225,0.5)",
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                onClick={() => setShowForm(!showForm)}
                className="group relative px-10 sm:px-14 py-5 sm:py-6 bg-gradient-to-r from-slate-200 via-white to-slate-100 text-slate-900 font-bold text-lg sm:text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-slate-300/30 backdrop-blur-sm overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
