"use client";

import Header from "@/components/Header";
import Footer from "@/components/ui/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-muted text-white px-4 py-10 md:px-20 lg:px-40">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Need help or have feedback? We'd love to hear from you. Fill out the form or use the contact details to reach us directly.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-200">Name</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-gray-200">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-gray-200">Subject</label>
              <input
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-gray-200">Message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-md focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-400 text-center">Thank you! We'll be in touch soon.</p>
            )}
          </form>

          {/* Contact Info */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-5">
            <h2 className="text-xl font-semibold text-white">Get in Touch</h2>

            <div>
              <p className="text-gray-300 font-medium">Business Name:</p>
              <p className="text-gray-400">Nexashopping Pvt. Ltd.</p>
            </div>

            <div>
              <p className="text-gray-300 font-medium">Owner:</p>
              <p className="text-gray-400">Ramkesh lodhi</p>
            </div>

            <div>
              <p className="text-gray-300 font-medium">Address:</p>
              <p className="text-gray-400">
                Ground Floor,Banpura Buzurg86,Arjun / Kunja Lodhi,Banpuar To Khargapur,BANPURA BUJURG, Tikamgarh, Madhya Pradesh, INDIA, 472115
              </p>
            </div>

            <div>
              <p className="text-gray-300 font-medium">Phone:</p>
              <p className="text-gray-400">+91 9669950390</p>
            </div>

            <div>
              <p className="text-gray-300 font-medium">Email:</p>
              <p className="text-gray-400">support@Nexashopping.in</p>
            </div>

            <div>
              <p className="text-gray-300 font-medium">Hours:</p>
              <p className="text-gray-400">Mon – Sat: 10:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
