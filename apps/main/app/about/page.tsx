"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '@repo/ui/components/ui/BackgroudBeams';
import { HeroHighlight, Highlight } from '@repo/ui/components/ui/HeroHighlight';
import { ColourfulText } from '@repo/ui/components/ui/colorfulText';

const AboutPage = () => {
  const features = [
    {
      title: "Speed Tracking",
      description: "Monitor your WPM progress with real-time analytics",
      icon: "⚡"
    },
    {
      title: "Accuracy Focus",
      description: "Improve precision with detailed error analysis",
      icon: "🎯"
    },
    {
      title: "Multiple Modes",
      description: "Practice with different difficulty levels and themes",
      icon: "🎮"
    },
    {
      title: "Progress Analytics",
      description: "Track your improvement over time with detailed charts",
      icon: "📊"
    }
  ];

  const stats = [
    { number: "1000+", label: "Active Users" },
    { number: "50+", label: "Typing Tests" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-slate-900/80 to-pink-900/50 animate-pulse"></div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block p-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-purple-400 text-sm font-medium">🚀 Welcome to</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-7xl md:text-9xl font-bold mb-8 "
          >
            <span className="bg-gradient-to-r mr-4 from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              <ColourfulText text="About" />
            </span>
            <span className="bg-gradient-to-r ml-4 from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              <ColourfulText text="Us" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Empowering typists worldwide with cutting-edge technology and beautiful design.
            <br />
            <span className="text-purple-400 font-medium">Master the art of typing with precision and speed.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Typing Now
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-500/50 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div> */}
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <Highlight>Mission</Highlight>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We believe that typing is more than just a skill—it's a gateway to productivity and creativity.
              Our platform combines advanced analytics with an intuitive interface to help you master the art of typing.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose <Highlight>Our Platform</Highlight>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Meet the <Highlight>Creator</Highlight>
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold mb-4">Avinash Suthar</h3>
              <p className="text-gray-300 mb-6">
                A passionate software developer dedicated to creating beautiful, functional, and user-friendly applications.
                This typing test platform is built with modern technologies and designed with the user experience in mind.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/AvinashSuthar" className="text-purple-400 hover:text-purple-300 transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/avinash-suthar-970a56230" className="text-purple-400 hover:text-purple-300 transition-colors">
                  LinkedIn
                </a>
                <a href="https://avinashsuthar.in" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Portfolio
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to <Highlight>Start Typing</Highlight>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users improving their typing skills every day
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

