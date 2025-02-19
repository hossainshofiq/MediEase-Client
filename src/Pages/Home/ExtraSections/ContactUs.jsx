import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Message sent successfully",
      showConfirmButton: false,
      timer: 1500
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>

      <div style={{ backgroundImage: "url('https://demo2.wpopal.com/medicor/wp-content/uploads/2019/05/landing_slide-bg.jpg')" }} className="relative w-full h-64 flex items-center justify-center text-center text-white bg-cover bg-center mt-[64px] lg:mt-[68px]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="flex flex-col gap-2">
          <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-bold">FAQ</h1>
          <p className="font-semibold bg-gray-300 px-3 py-1 rounded-md text-black">MadeEase / Contact Us</p>
        </div>
      </div>

      <div className="w-11/12 mx-auto p-6 shadow-lg rounded-md border my-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhone className="text-primary text-xl"></FaPhone>
              <span className="text-lg">+8801689 819951</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-xl"></FaEnvelope>
              <span className="text-lg">support@mediease.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary text-xl"></FaMapMarkerAlt>
              <span className="text-lg">1/A Health State, 5th floor, MediEase City</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />

            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />

            <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            <button type="submit" className="btn btn-outline w-full py-3 rounded-md font-bold transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
