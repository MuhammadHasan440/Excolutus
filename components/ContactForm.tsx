"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const subject = encodeURIComponent(`New Contact Form Submission - ${formData.name}`)
      const body = encodeURIComponent(
        `Hello Excolutus Team,\n\nYou have received a new contact form submission:\n\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `👤 Name: ${formData.name}\n` +
          `📧 Email: ${formData.email}\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
          `💬 Message:\n${formData.message}\n\n` +
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
          `Sent from: Excolutus Coming Soon Page\n` +
          `Time: ${new Date().toLocaleString()}`,
      )
      const mailtoLink = `mailto:jdavis@excolutus.com?subject=${subject}&body=${body}`

      window.location.href = mailtoLink

      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", message: "" })
      }, 4000)
    } catch (error) {
      console.error("Error sending email:", error)
      setIsSubmitting(false)
    }
  }

  const handlePhoneCall = () => {
    window.location.href = "tel:+15027628637"
  }

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 30px rgba(148, 163, 184, 0.6), 0 0 60px rgba(148, 163, 184, 0.3)",
      borderColor: "#94a3b8",
      backgroundColor: "rgba(51, 65, 85, 0.8)",
    },
    blur: {
      scale: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
      borderColor: "rgba(71, 85, 105, 0.6)",
      backgroundColor: "rgba(51, 65, 85, 0.5)",
    },
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-slate-500/30 shadow-2xl max-w-md w-full text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(226,232,240,0.3) 1px, transparent 1px),
                radial-gradient(circle at 80% 80%, rgba(226,232,240,0.2) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360, 720],
            filter: ["hue-rotate(0deg)", "hue-rotate(360deg)", "hue-rotate(0deg)"],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="text-7xl mb-6 relative z-10"
        >
          ✨
        </motion.div>

        <motion.h3
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="text-3xl font-black mb-4 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent bg-[length:200%_100%] relative z-10"
        >
          Message Sent!
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-slate-300 text-lg font-medium relative z-10"
        >
          Your email client should open shortly
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 text-slate-400 text-sm relative z-10"
        >
          Redirecting to jdavis@excolutus.com
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
    
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-500/30 shadow-2xl max-w-md w-full relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(226,232,240,0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(226,232,240,0.3) 1px, transparent 1px),
              linear-gradient(45deg, transparent 40%, rgba(226,232,240,0.1) 50%, transparent 60%)
            `,
            backgroundSize: "80px 80px, 40px 40px, 120px 120px",
          }}
        />
      </div>

      <motion.div  className="text-center mb-8 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-black mb-2 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            Get In Touch
          </motion.span>
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto rounded-full"
        />

        <motion.div
          
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="mailto:jdavis@excolutus.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300"
          >
            <span className="text-lg">📧</span>
            <span className="text-sm font-medium">jdavis@excolutus.com</span>
          </motion.a>

          <motion.button
            onClick={handlePhoneCall}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300"
          >
            <span className="text-lg">📞</span>
            <span className="text-sm font-medium">+1 502.762.8637</span>
          </motion.button>
        </motion.div>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <motion.div >
          <motion.div
            animate={focusedField === "name" ? "focus" : "blur"}
            variants={inputVariants}
            className="relative"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-5 py-4 bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:border-slate-400 focus:outline-none rounded-2xl transition-all duration-500 text-lg font-medium"
              required
            />
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                background:
                  focusedField === "name"
                    ? "linear-gradient(90deg, transparent, rgba(148,163,184,0.1), transparent)"
                    : "transparent",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        <motion.div >
          <motion.div
            animate={focusedField === "email" ? "focus" : "blur"}
            variants={inputVariants}
            className="relative"
          >
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-5 py-4 bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:border-slate-400 focus:outline-none rounded-2xl transition-all duration-500 text-lg font-medium"
              required
            />
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                background:
                  focusedField === "email"
                    ? "linear-gradient(90deg, transparent, rgba(148,163,184,0.1), transparent)"
                    : "transparent",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        <motion.div >
          <motion.div
            animate={focusedField === "message" ? "focus" : "blur"}
            variants={inputVariants}
            className="relative"
          >
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              className="w-full px-5 py-4 bg-slate-700/50 border border-slate-600/50 text-white placeholder:text-slate-400 focus:border-slate-400 focus:outline-none rounded-2xl transition-all duration-500 min-h-[140px] resize-none text-lg font-medium leading-relaxed"
              required
            />
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                background:
                  focusedField === "message"
                    ? "linear-gradient(90deg, transparent, rgba(148,163,184,0.1), transparent)"
                    : "transparent",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        <motion.div >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 hover:from-slate-500 hover:via-slate-400 hover:to-slate-500 text-white font-bold py-4 rounded-2xl transition-all duration-500 relative overflow-hidden group disabled:opacity-50 text-lg shadow-xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative z-10 tracking-wide">
              {isSubmitting ? (
                <motion.div className="flex items-center justify-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                  />
                  <span>Sending...</span>
                </motion.div>
              ) : (
                "Send Message"
              )}
            </span>
          </motion.button>
        </motion.div>
      </form>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-slate-300/20 rounded-full blur-sm"
          style={{
            width: `${4 + (i % 3)}px`,
            height: `${4 + (i % 3)}px`,
            right: `${15 + (i % 3) * 20}px`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  )
}
