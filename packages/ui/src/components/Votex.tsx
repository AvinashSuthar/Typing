import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { MagicButton } from "../button";
import { ColourfulText } from "./ui/colorfulText";
import { motion } from "framer-motion";
import { ArrowDown, Play, Zap, Target, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Votex = () => {
  return (
    <div className="relative  w-full z-50 p-3 flex items-center justify-center">
      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6 "
          >
            
            <Zap className="w-4  h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Advanced Typing Platform</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-6 leading-tight">
            <span className="text-white">Master Your</span>
            <br />
            <span className="text-white">Typing Speed</span>
          </h1>

          {/* Subtitle */}
          <motion.div
            className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <TextGenerateEffect
              words="Transform your typing skills with real-time analytics, AI-powered feedback, and personalized training programs."
              className="text-lg md:text-xl"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#typing-practice" title="Start Free Test" className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300">
                <Zap className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Start Typing</span>
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Watch Demo</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Active Users", color: "text-blue-400" },
            { icon: <Target className="w-6 h-6" />, value: "99%", label: "Accuracy Rate", color: "text-green-400" },
            { icon: <TrendingUp className="w-6 h-6" />, value: "150+", label: "WPM Average", color: "text-yellow-400" },
            { icon: <Award className="w-6 h-6" />, value: "24/7", label: "Available", color: "text-purple-400" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
            >
              <div className={`${stat.color} mb-2 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Real-time Analytics",
              description: "Get instant feedback on your typing speed and accuracy",
              color: "text-yellow-400",
              bgColor: "bg-yellow-400/10"
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "AI-Powered Training",
              description: "Personalized exercises based on your performance",
              color: "text-green-400",
              bgColor: "bg-green-400/10"
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Progress Tracking",
              description: "Monitor your improvement over time with detailed charts",
              color: "text-purple-400",
              bgColor: "bg-purple-400/10"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/20 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`${feature.color} ${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/50 cursor-pointer"
          onClick={() => document.getElementById('typing-practice')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Votex;
