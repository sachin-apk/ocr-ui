import React from "react";

function Hero({ onStart }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Extract Text from Images 📄
      </h1>

      <p className="text-gray-600 text-lg mb-6 max-w-xl mx-auto">
        Upload your images and instantly convert them into editable text using OCR technology.
      </p>

      <p className="text-sm text-red-500 mb-6">
        ⚠️ Maximum file size: 2MB per file
      </p>

      <button
        onClick={onStart}
        className="bg-blue-600 text-white mt-[40px] px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default Hero;