import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaComments } from "react-icons/fa";

const CHATBOT_URL = "https://udify.app/chatbot/gK3tFvSW9EqWfOID";

const FloatingChatBubbles = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="fixed z-[120] bottom-6 right-6 flex flex-col items-end gap-4 select-none">
      {/* WhatsApp */}
      <a
        href="https://wa.me/2348130000000" // Replace with real WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="animate-bounce bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      {/* Call */}
      <a
        href="tel:+2348130000000" // Replace with real phone number
        className="animate-bounce bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl transition-all duration-200"
        style={{ animationDelay: "0.2s" }}
        aria-label="Call Dolftech"
      >
        <FaPhoneAlt />
      </a>
      {/* Chatbot */}
      <button
        onClick={() => setShowChatbot((v) => !v)}
        className="animate-bounce bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl transition-all duration-200 focus:outline-none"
        style={{ animationDelay: "0.4s" }}
        aria-label="Open Dolftech Chatbot"
      >
        <FaComments />
      </button>
      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="fixed bottom-28 right-6 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-cyan-200 dark:border-cyan-800 flex flex-col z-[130] animate-fade-in">
          <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-t-2xl">
            <span className="font-bold">Dolftech Support Bot</span>
            <button
              onClick={() => setShowChatbot(false)}
              className="text-lg font-bold"
            >
              ×
            </button>
          </div>
          <iframe
            src={CHATBOT_URL}
            className="w-full h-full border-none rounded-b-2xl"
            frameBorder="0"
            allow="microphone"
            loading="lazy"
            title="Dolftech Chatbot"
          />
        </div>
      )}
    </div>
  );
};

export default FloatingChatBubbles;
