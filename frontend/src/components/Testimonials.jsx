import React from "react";
import { FaStar } from "react-icons/fa";
import { assets } from "../assets/assets";

const Testimonials = () => {
  // Replace with gaming laptop customer stories, images, and YouTube video IDs
  const testimonials = [
    {
      name: "Tobi Adeyemi",
      location: "Lagos",
      role: "Pro Gamer & Streamer",
      text: "My Dolftech gaming laptop is a beast! I unboxed it live on stream and my FPS doubled instantly. If you want to dominate in eSports, this is the plug!",
      image: assets.carouselmodel,
      video: "dQw4w9WgXcQ", // Replace with real YouTube ID
    },
    {
      name: "Chidera Okafor",
      location: "Abuja",
      role: "Student & Content Creator",
      text: "I was skeptical at first, but after seeing my friends' unboxing, I had to get mine. Editing videos and gaming is now so smooth. Dolftech made it easy!",
      image: assets.caucasiandude,
      video: "3JZ_D3ELwOQ", // Replace with real YouTube ID
    },
    {
      name: "Fatima Bello",
      location: "Ibadan",
      role: "Tech Reviewer",
      text: "The unboxing experience was premium! I posted my review on YouTube and my DMs blew up. Everyone wants to know where I got my laptop. Dolftech is the real deal!",
      image: assets.carouselmodel1,
      video: "L_jWHffIx5E", // Replace with real YouTube ID
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-purple-600"></div>
            <p className="font-medium text-sm text-purple-600">
              CUSTOMER STORIES
            </p>
          </div>
          <h2 className="prata-regular text-4xl text-purple-900 mb-4">
            Naija Customer Stories
          </h2>
          <p className="text-xl text-gray-600">
            Why Nigeria's elite choose Scent Design NG
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-cyan-100 dark:border-cyan-900 hover:shadow-xl transition-shadow flex flex-col items-center"
            >
              <div className="flex flex-col items-center mb-4 w-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-cyan-500 shadow-md mb-2"
                />
                <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-300">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${testimonial.video}`}
                  title={`YouTube video testimonial by ${testimonial.name}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic mb-6 border-l-4 border-cyan-500 pl-4 text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                Verified Purchase
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-purple-700 text-white rounded-2xl p-8 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="prata-regular text-3xl font-bold mb-6">
              Why Dolftech?
            </h3>
            <p className="mt-8 text-lg max-w-2xl mx-auto">
              "Dolftech is changing the game for Nigerian gamers and creators.
              The unboxing experience, performance, and support are unmatched.
              If you want to level up, this is where you start."
              <span className="block mt-2 text-amber-300">
                - TechNaija Reviews
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
