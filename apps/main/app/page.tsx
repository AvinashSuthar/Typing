"use client";

import Votex from "@repo/ui/components/Votex";
import TypingTest from "@repo/ui/components/typingArea";
import { BackgroundBeamsWithCollision } from "@repo/ui/components/ui/BackgroudBeams";
import { BackgroundLines } from "@repo/ui/components/ui/BackgroudAni";
import { motion } from "framer-motion";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import {
  Keyboard,
  Zap,
  Target,
  TrendingUp,
  Clock,
  Award,
  Star,
  Users,
  BarChart3
} from "lucide-react";

export default function Home() {
  return (
    <div className=" bg-gradient-to-br from-slate-900 via-purple-900 pt-20 to-slate-900">
      {/* Hero Section with Enhanced Vortex */}
      <section className="relative  flex items-center justify-center overflow-hidden">
        <Votex />

        {/* Floating Stats */}
        <motion.div
          className="absolute top-20 left-10 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-black/20 backdrop-blur-sm border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-white/80 text-sm">10K+ Users</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="absolute top-20 right-10 hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="bg-black/20 backdrop-blur-sm border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white/80 text-sm">99% Accuracy</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our Typing Test?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the most advanced typing test platform with real-time analytics,
              beautiful animations, and comprehensive performance tracking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Real-time typing analysis with instant feedback and performance metrics.",
                color: "text-yellow-400"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Precision Focused",
                description: "Advanced accuracy tracking with detailed error analysis and improvement suggestions.",
                color: "text-red-400"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Progress Tracking",
                description: "Monitor your typing speed improvements over time with detailed analytics.",
                color: "text-green-400"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Timing",
                description: "Choose from multiple time durations to match your practice needs.",
                color: "text-blue-400"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Detailed Analytics",
                description: "Comprehensive performance reports with WPM, accuracy, and error analysis.",
                color: "text-purple-400"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Experience",
                description: "Beautiful, modern interface with smooth animations and responsive design.",
                color: "text-pink-400"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/20 backdrop-blur-sm border-white/10 hover:bg-black/30 transition-all duration-300 group">
                  <CardHeader>
                    <div className={`${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typing Test Section */}
      <section id="typing-practice" className="py-20 px-4">
        <div className="w-full mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Test Your Speed?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Challenge yourself with our advanced typing test. Track your progress,
              improve your accuracy, and become a typing master.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black/20 backdrop-blur-sm  rounded-2xl p-3"
          >
            <TypingTest />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4">
        <BackgroundLines className="h-[400px]">
          <div className="max-w-6xl mx-auto h-full flex items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
              {[
                { number: "150+", label: "WPM Average", icon: <Zap className="w-6 h-6" /> },
                { number: "99%", label: "Accuracy Rate", icon: <Target className="w-6 h-6" /> },
                { number: "10K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
                { number: "24/7", label: "Available", icon: <Clock className="w-6 h-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-purple-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BackgroundLines>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Typing Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users improving their typing skills.
              Track your progress, compete with others, and become a typing master.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById('typing-practice')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Typing Test
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
