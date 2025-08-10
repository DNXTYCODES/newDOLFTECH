import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiMessageSquare,
  FiChevronDown,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiCalendar,
} from "react-icons/fi";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 dark:from-gray-900 dark:to-cyan-900/10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600/10 to-purple-50 rounded-b-3xl overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-cyan-500"></div>
              <p className="font-medium text-sm text-cyan-500">
                CONTACT DOLFTECH
              </p>
            </div>
            <h1 className="gamer-font text-4xl md:text-5xl lg:text-6xl text-cyan-900 dark:text-cyan-300 mb-6 leading-tight">
              Let's Connect with Dolftech 🇳🇬
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Need a laptop for work, school, gaming, or business? Want advice
              on the best tech for your budget? Our Lagos-based Dolftech team is
              here for you. We know what matters: fast delivery, honest advice,
              and real results. Reach out and let’s help you get the right
              laptop, no stories.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+2348118532900"
                className="px-6 py-3 md:px-8 md:py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors flex items-center gap-2 text-sm md:text-base"
              >
                <FiPhone className="text-xl" />
                Call Us (Lagos)
              </a>
              <a
                href="https://wa.me/2348118532900"
                className="px-6 py-3 md:px-8 md:py-3 border-2 border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center gap-2 text-sm md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={assets.whatsapp} alt="WhatsApp" className="w-5 h-5" />
                WhatsApp Chat
              </a>
              <a
                href="mailto:hello@dolftech.com.ng"
                className="px-6 py-3 md:px-8 md:py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg font-medium hover:bg-cyan-50 transition-colors flex items-center gap-2 text-sm md:text-base"
              >
                <FiMail className="text-xl" />
                Email Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={assets.carouselmodel}
                alt="Dolftech Customer Service"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-cyan-900/80 text-white p-4 text-center">
                <p className="gamer-font">Our laptop experts are online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Information */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Address */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <FiMapPin className="text-3xl text-purple-600" />
            </div>
            <h3 className="prata-regular text-xl md:text-2xl font-bold mb-4 text-purple-900">
              Visit Us
            </h3>
            <div className="space-y-2 mb-6">
              <p className="text-gray-600 text-sm md:text-base">
                3/9 Olu Koleosho Street
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Ikeja, Lagos, Nigeria
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                (Landmark: Off Medical Road, Ikeja)
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=3/9+Olu+Koleosho+Street+Ikeja+Lagos"
              className="inline-block px-5 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm md:text-base"
            >
              Get Directions
            </a>
          </div>
          {/* Phone */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <FiPhone className="text-3xl text-purple-600" />
            </div>
            <h3 className="prata-regular text-xl md:text-2xl font-bold mb-4 text-purple-900">
              Call Us
            </h3>
            <div className="space-y-2 mb-6">
              <p className="text-gray-600 text-sm md:text-base">
                Customer Service: +234 811 853 2900
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                WhatsApp: +234 811 853 2900
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                We respond fast. No long story, just solutions.
              </p>
            </div>
            <a
              href="tel:+2348118532900"
              className="inline-block px-5 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm md:text-base"
            >
              Call Now
            </a>
          </div>
          {/* Hours */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <FiClock className="text-3xl text-purple-600" />
            </div>
            <h3 className="prata-regular text-xl md:text-2xl font-bold mb-4 text-purple-900">
              Business Hours
            </h3>
            <div className="space-y-2 mb-6">
              <p className="text-gray-600 text-sm md:text-base">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Saturday: 10:00 AM - 4:00 PM
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Sunday: Closed
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Public Holidays: Call to confirm
              </p>
            </div>
            <a
              href="/appointment"
              className="inline-block px-5 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm md:text-base"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      {/* Contact Form and Map */}
      <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-6">
              <FiMessageSquare className="text-2xl text-purple-600" />
              <h2 className="prata-regular text-2xl md:text-3xl text-purple-900">
                Send Us a Message
              </h2>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  placeholder="0802 829 3058 (WhatsApp available)"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600 focus:outline-none">
                  <option value="">Select a subject</option>
                  <option value="product">Laptop Inquiry</option>
                  <option value="wholesale">
                    Bulk/Wholesale (Schools, Offices, Churches)
                  </option>
                  <option value="training">
                    Tech Training (Coding, Digital Skills)
                  </option>
                  <option value="workshop">Workshop/Bootcamp</option>
                  <option value="appointment">Visit Our Ibadan Store</option>
                  <option value="other">Other (Let us know!)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  placeholder="How can we assist you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="h-full rounded-2xl overflow-hidden shadow-lg border border-purple-100">
            <iframe
              title="Dolftech Lagos Location"
              src="https://www.google.com/maps?q=3/9+Olu+Koleosho+Street,+Ikeja,+Lagos,+Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="min-h-[400px] md:min-h-[500px]"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section - Dolftech Nigeria */}
        <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="prata-regular text-3xl text-purple-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            </div>
            <div className="bg-purple-900 text-white rounded-2xl p-6 md:p-8">
              <div className="space-y-4">
                {[
                  {
                    question: "How fast is delivery?",
                    answer:
                      "We deliver within 2-5 business days in major Nigerian cities. You get tracking and real updates. No stories.",
                  },
                  {
                    question: "Can I pay on delivery?",
                    answer:
                      "Yes, you can pay with Paystack, bank transfer, or cash/card on pickup at our Ibadan store.",
                  },
                  {
                    question: "Do you offer warranty?",
                    answer:
                      "Every Dolftech laptop comes with at least 6 months warranty. We handle repairs/upgrades locally, no shipping abroad.",
                  },
                  {
                    question: "Can I visit your store before buying?",
                    answer:
                      "Yes! You can test laptops, get honest advice, and pick up your order in person. Walk-ins and appointments welcome.",
                  },
                  {
                    question: "Do you offer bulk or student discounts?",
                    answer:
                      "We give special pricing for students, schools, and bulk/corporate orders. Ask for a quote!",
                  },
                  {
                    question: "What if I have a problem after buying?",
                    answer:
                      "Our support is always available via WhatsApp, phone, or in-store. We solve issues fast, no excuses.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-white/20 pb-4 last:border-0"
                  >
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-lg">{faq.question}</span>
                        <FiChevronDown className="text-xl transform group-open:rotate-180 transition-transform" />
                      </summary>
                      <p className="mt-3 text-gray-300">{faq.answer}</p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="prata-regular text-3xl text-purple-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Tolu Adeyemi",
                  role: "Student, UI Ibadan",
                  comment:
                    "Dolftech helped me get a powerful laptop for my design projects. Their advice was spot on and delivery was fast!",
                  rating: "★★★★★",
                },
                {
                  name: "Chinedu Okonkwo",
                  role: "Business Owner, Lagos",
                  comment:
                    "I bought 5 laptops for my staff. Dolftech gave me a good discount and even set up the systems for us.",
                  rating: "★★★★★",
                },
                {
                  name: "Amina Bello",
                  role: "Gamer, Abuja",
                  comment:
                    "I needed a gaming laptop that could handle everything. Dolftech recommended the perfect one and I love it!",
                  rating: "★★★★★",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-purple-100"
                >
                  <div className="text-amber-500 mb-3">
                    {testimonial.rating}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="font-bold text-purple-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-900 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="prata-regular text-3xl md:text-4xl mb-6">
                Join the Dolftech Community
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Subscribe for laptop deals, tech tips, and exclusive offers for
                Nigerians. No spam, just value!
              </p>

              <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 md:px-6 md:py-4 rounded-lg text-purple-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-amber-500 text-purple-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-amber-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>

              <div className="mt-8 flex justify-center gap-6">
                <a
                  href="#"
                  className="text-white hover:text-amber-400 transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-amber-400 transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-amber-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-amber-400 transition-colors"
                  aria-label="Events"
                >
                  <FiCalendar className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
