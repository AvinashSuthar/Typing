"use client";

import { useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send, CheckCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
    };

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/AvinashSuthar",
            icon: Github,
            color: "hover:text-gray-400"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/avinash-suthar-970a56230",
            icon: Linkedin,
            color: "hover:text-blue-500"
        },
        {
            name: "Twitter",
            url: "https://x.com/avinash__suthar",
            icon: Twitter,
            color: "hover:text-blue-400"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/avinashsutharr",
            icon: Instagram,
            color: "hover:text-pink-500"
        }
    ];

    return (
        <div className="min-h-screen  w-full  bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Background Animation */}
            {/* <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div> */}
                {/* <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div> */}
            {/* </div> */}

            <div className="relative z-10 container mx-auto px-4 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Have questions about the typing test? Want to collaborate?
                        I'd love to hear from you! Let's connect and make something amazing together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Contact Form */}
                    <Card className="glass-dark border-purple-500/20 shadow-2xl">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-white mb-2">
                                Send a Message
                            </CardTitle>
                            <CardDescription className="text-gray-300">
                                Fill out the form below and I'll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                                            placeholder="Tell me what's on your mind..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Personal Info */}
                        <Card className="glass-dark border-purple-500/20 shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white">
                                    Contact Information
                                </CardTitle>
                                <CardDescription className="text-gray-300">
                                    Reach out through any of these channels
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg">
                                    <Mail className="w-6 h-6 text-purple-400" />
                                    <div>
                                        <p className="text-white font-medium">Email</p>
                                        <p className="text-gray-300">avinashsuthar.in@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg">
                                    <MapPin className="w-6 h-6 text-purple-400" />
                                    <div>
                                        <p className="text-white font-medium">Location</p>
                                        <p className="text-gray-300">India</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg">
                                    <Phone className="w-6 h-6 text-purple-400" />
                                    <div>
                                        <p className="text-white font-medium">Phone</p>
                                        <p className="text-gray-300">Available on request</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Links */}
                        <Card className="glass-dark border-purple-500/20 shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white">
                                    Connect With Me
                                </CardTitle>
                                <CardDescription className="text-gray-300">
                                    Follow me on social media for updates and insights
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center space-x-3 p-4 bg-gray-800/30 rounded-lg transition-all duration-200 hover:bg-gray-700/50 ${social.color} group`}
                                        >
                                            <social.icon className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-transform duration-200" />
                                            <span className="text-white font-medium">{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Stats */}
                        <Card className="glass-dark border-purple-500/20 shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-white">
                                    About the Project
                                </CardTitle>
                                <CardDescription className="text-gray-300">
                                    This typing test application is built with modern technologies
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                                        <div className="text-2xl font-bold text-purple-400">100%</div>
                                        <div className="text-sm text-gray-300">Free to Use</div>
                                    </div>
                                    <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                                        <div className="text-2xl font-bold text-purple-400">24/7</div>
                                        <div className="text-sm text-gray-300">Available</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 text-sm">
                        Built with ❤️ by{" "}
                        <a
                            href="https://avinashsuthar.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                        >
                            Avinash Suthar
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}