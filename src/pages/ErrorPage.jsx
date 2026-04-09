import React from "react";
import { Link } from "react-router";
// import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center max-w-md w-full text-white">
        
        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold mb-4">404</h1>
        
        {/* Message */}
        <h2 className="text-2xl font-semibold mb-2">
          Oops! Page not found
        </h2>
        <p className="text-sm text-gray-200 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
        >
          Go Home
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;