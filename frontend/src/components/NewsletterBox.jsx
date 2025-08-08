import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with your newsletter service here (e.g., Mailchimp, EmailOctopus, etc)
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="gamer-font text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Join the Dolftech Newsletter
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Get exclusive deals, new arrivals, and gaming tips straight to your inbox.
        </p>
        {subscribed ? (
          <div className="text-green-600 dark:text-green-400 font-bold py-8">
            Thanks for subscribing! Check your email for updates.
          </div>
        ) : (
          <form
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
            onSubmit={handleSubmit}
          >
            <div className="relative w-full sm:w-auto flex-1">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-700 to-cyan-600 text-white font-bold rounded-lg shadow hover:shadow-lg transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterBox;


















// import React, { useState } from "react";

// const NewsletterBox = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch("https://scentdesigngfsbackend.onrender.com/api/newsletter/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Subscription successful! 🎉");
//         setEmail(""); // Clear input after success
//       } else {
//         setMessage(data.error || "Subscription failed. Please try again.");
//       }
//     } catch (error) {
//       setMessage("Network error. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="text-center">
//       <p className="prata-regular text-2xl font-medium text-gray-800 bg-golden-brown bg-clip-text text-transparent bg-to-b">
//         Subscribe now to stay in the loop
//       </p>
//       <p className="text-gray-400 mt-3">
//         Join our newsletter and be the first to discover exclusive offers, the
//         latest arrivals, and insider news on the world of luxury watches. Sign
//         up today and elevate your style with Flyboy!
//       </p>
//       <form
//         onSubmit={onSubmitHandler}
//         className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
//       >
//         <input
//           className="w-full sm:flex-1 outline-none text-black"
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           disabled={loading}
//         />
//         <button
//           type="submit"
//           className="bg-[#333333] text-white text-xs px-10 py-4"
//           disabled={loading}
//         >
//           {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
//         </button>
//       </form>
//       {message && <p className="text-gray-600 mt-2">{message}</p>}
//     </div>
//   );
// };

// export default NewsletterBox;
