import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with your backend or email service here
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="gamer-font text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Contact Dolftech
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <FaMapMarkerAlt className="text-cyan-500" />
              <span>3/9 Olu Koleosho Street, Ikeja, Lagos</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/2348118532900"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +234 811 853 2900
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <FaInstagram className="text-purple-700 dark:text-purple-400" />
              <a
                href="https://instagram.com/dolftech.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @dolftech.ng
              </a>
            </div>
          </div>
          <div className="flex-1">
            {submitted ? (
              <div className="text-green-600 dark:text-green-400 font-bold text-center py-8">
                Thank you for reaching out! We’ll get back to you soon.
              </div>
            ) : (
              <form className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 border border-gray-200 dark:border-gray-700 space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-700 to-cyan-600 text-white font-bold rounded-lg shadow hover:shadow-lg transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




















// import React from "react";
// import { FiCalendar, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

// const Contact = () => {
//   const offices = [
//     {
//       city: "IBADAN HQ",
//       address:
//         "7 oyesina close, opposite 7 ibikunle avenue, old bodija, Ibadan, Nigeria",
//       phone: "+234 802 829 3058",
//       hours: "Mon-Fri: 9AM-6PM | Sat: 10AM-4PM",
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-purple-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <div className="w-8 h-[2px] bg-purple-600"></div>
//             <p className="font-medium text-sm text-purple-600">GET IN TOUCH</p>
//           </div>
//           <h2 className="prata-regular text-4xl text-purple-900 mb-4">
//             Contact Us
//           </h2>
//           <p className="text-xl text-gray-600">We'd love to hear from you</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             {offices.map((office, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100"
//               >
//                 <h3 className="prata-regular text-2xl font-bold mb-4 text-purple-900">
//                   {office.city}
//                 </h3>
//                 <div className="space-y-4">
//                   <p className="flex items-start text-gray-600">
//                     <FiMapPin className="mr-2 mt-1 text-purple-600" />
//                     {office.address}
//                   </p>
//                   <p className="flex items-start text-gray-600">
//                     <FiPhone className="mr-2 mt-1 text-purple-600" />
//                     {office.phone}
//                   </p>
//                   <p className="flex items-start text-gray-600">
//                     <FiMail className="mr-2 mt-1 text-purple-600" />
//                     lamboparfums@gmail.com
//                   </p>
//                   <p className="flex items-start text-gray-600">
//                     <FiCalendar className="mr-2 mt-1 text-purple-600" />
//                     {office.hours}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             <div className="bg-purple-900 text-white p-8 rounded-2xl shadow-lg">
//               <h3 className="prata-regular text-2xl font-bold mb-4">
//                 Business Inquiries
//               </h3>
//               <div className="space-y-4">
//                 <p className="flex items-start">
//                   <FiMail className="mr-2 mt-1 text-amber-500" />
//                   <span>lamboparfums@gmail.com</span>
//                 </p>
//                 <p className="flex items-start">
//                   <FiPhone className="mr-2 mt-1 text-amber-500" />
//                   <span>+234 802 829 3058 (Whatsapp/Call)</span>
//                 </p>
//                 {/* <p className="flex items-start">
//                   <FiMail className="mr-2 mt-1 text-amber-500" />
//                   <span>lamboparfums@gmail.com (Academy)</span>
//                 </p> */}
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
//             <form className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2">Phone Number</label>
//                 <input
//                   type="tel"
//                   className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
//                   placeholder="080X XXX XXXX"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2">Subject</label>
//                 <select className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600">
//                   <option value="">Select a subject</option>
//                   <option value="product">Product Inquiry</option>
//                   <option value="wholesale">Wholesale Partnership</option>
//                   <option value="training">Training Program</option>
//                   <option value="workshop">Workshop Booking</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2">Message</label>
//                 <textarea
//                   rows="4"
//                   className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
//                   placeholder="How can we assist you?"
//                 ></textarea>
//               </div>
//               <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
