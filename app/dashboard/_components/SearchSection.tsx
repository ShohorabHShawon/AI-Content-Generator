import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-5 md:p-10 text-white bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Browse All Templates
      </h2>
      <p className="text-center text-sm md:text-base">
        What do you want to create today?
      </p>

      <div className="flex justify-center items-center mt-5 w-full">
        <div className="flex items-center gap-2 p-2 border rounded-full bg-white/80 w-full max-w-lg shadow-lg">
          <Search className="text-primary mx-1" />
          <input
            onChange={(event) => onSearchInput(event.target.value)}
            type="text"
            placeholder="Search templates"
            className="flex-grow text-black bg-transparent focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
