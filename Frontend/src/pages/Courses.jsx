 import React from "react";
import Resources from "../components/Resources"; // Resources component import

export default function Courses() {
  return (
    <div className="text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Courses Page</h1>

      {/* Resources Component */}
      <div className="mb-10">
        <Resources />
      </div>

      {/* Placeholder for AI Model Integration */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">AI Model Section</h2>
        <p className="text-gray-300">
          Here you can integrate your AI model later. For now, this is just a
          placeholder.
        </p>
      </div>
    </div>
  );
}
