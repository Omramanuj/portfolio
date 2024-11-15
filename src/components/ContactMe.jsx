"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HireMe = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_fgii98t";
    const templateId = "template_gglr4vy";
    const userId = "IWn_febdRuqrpc__Z";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(
        (response) => {
          toast({
            title: "Success!",
            description: "Message sent successfully. I'll get back to you soon.",
            variant: "success",
          });
          setFormData({
            name: "",
            description: "",
            email: "",
            contact: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-[#1c1c22] p-6">
      {/* Left Section */}
      <div className="lg:w-1/2 text-white flex flex-col justify-center items-center lg:items-start mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-[#00ff99]">Hire Me</span> to build amazing things.
        </h1>
        <p className="text-gray-400 mb-8 text-center lg:text-left">
          Looking for a skilled developer? I’m here to help bring your ideas to life. Get in touch today!
        </p>
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="mailto:ramanuj.om.r@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-[#00ff99] transition"
          >
            <Mail className="w-6 h-6" />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ramanuj-om/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-[#00ff99] transition"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/Om_RRamanuj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-[#00ff99] transition"
          >
            <Twitter className="w-6 h-6" />
            <span>Twitter</span>
          </a>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="lg:w-1/2 bg-[#1c1c22] text-white rounded-lg shadow-lg p-6 border border-[#00ff99]">
        <h2 className="text-2xl font-bold text-center mb-4">Hire Me</h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Fill out the form below, and I’ll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1c1c22] text-white border border-gray-600 focus:outline-none focus:border-[#00ff99] transition"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1c1c22] text-white border border-gray-600 focus:outline-none focus:border-[#00ff99] transition"
              placeholder="Tell me about your requirements"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1c1c22] text-white border border-gray-600 focus:outline-none focus:border-[#00ff99] transition"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1c1c22] text-white border border-gray-600 focus:outline-none focus:border-[#00ff99] transition"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00ff99] text-[#1c1c22] font-bold py-2 rounded shadow-md hover:shadow-lg hover:bg-opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HireMe;
