import React from "react";

function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Centering content */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          I am working on it!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The History page is under development. Check back soon for updates.
        </p>
        {/* Wrapper to center spinner */}
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
