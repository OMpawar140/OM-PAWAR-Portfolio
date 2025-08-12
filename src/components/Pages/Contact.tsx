// src/components/Pages/Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full text-left">
      <p className="text-gray-400 text-sm">Get in Touch</p>
      <h1 className="text-white text-3xl font-bold">Contact Me</h1>
      <p className="text-gray-300 mt-6 leading-relaxed">
        Have a project in mind or want to collaborate? I am always open to 
        discussing new ideas, creative projects, or opportunities to be part 
        of your vision.
      </p>
      <form className="flex flex-col gap-4 mt-6">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-2 rounded-lg bg-[#1F1F1F] text-white border border-gray-600 focus:border-[#00AEEF] outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded-lg bg-[#1F1F1F] text-white border border-gray-600 focus:border-[#00AEEF] outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="px-4 py-2 rounded-lg bg-[#1F1F1F] text-white border border-gray-600 focus:border-[#00AEEF] outline-none"
        ></textarea>
        <button className="px-6 py-2 bg-[#00AEEF] text-white rounded-full hover:bg-[#008CBA] transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
