import { Search, LayoutTemplate, PenSquare, Megaphone } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you use shadcn/ui

// Define a type for the component props for better TypeScript support
type SearchSectionProps = {
  onSearchInput: (value: string) => void;
  // Optional: Add a prop for handling category clicks
  onCategorySelect?: (category: string) => void;
};

function SearchSection({
  onSearchInput,
  onCategorySelect,
}: SearchSectionProps) {
  return (
    <div className="relative py-20 px-4 bg-black text-white flex justify-center items-center overflow-hidden">
      {/* Reusing the modern aurora background for a high-tech feel */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute bottom-0 left-[-10%] top-[-20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(99,102,241,0.7),rgba(0,0,0,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] top-auto h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(217,70,239,0.7),rgba(0,0,0,0))]"></div>
      </div>

      {/* Main Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-2xl p-8 space-y-6 bg-gray-900/50 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-lg">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Find Your Perfect Template
          </h2>
          <p className="mt-2 text-neutral-300">
            What masterpiece will you create today?
          </p>
        </div>

        {/* Enhanced Search Input with Focus State */}
        <div
          className="flex items-center gap-2 p-1 border border-transparent rounded-full bg-white/10 transition-all duration-300
                       focus-within:border-fuchsia-500/80 focus-within:shadow-lg focus-within:shadow-fuchsia-500/20"
        >
          <Search className="text-neutral-400 mx-3" />
          <input
            onChange={(event) => onSearchInput(event.target.value)}
            type="text"
            placeholder="Search for 'Blog Post', 'Ad Copy', 'Tweets'..."
            className="flex-grow text-white placeholder:text-neutral-500 bg-transparent focus:outline-none"
          />
        </div>

        {/* Actionable Suggestions / Categories */}
        <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
          <p className="text-sm text-neutral-400 font-medium mr-2">Popular:</p>
          <Button
            onClick={() => onCategorySelect?.('Blog')}
            variant="ghost"
            size="sm"
            className="rounded-full text-white hover:bg-white/10"
          >
            Blog Posts
          </Button>
          <Button
            onClick={() => onCategorySelect?.('Social')}
            variant="ghost"
            size="sm"
            className="rounded-full text-white hover:bg-white/10"
          >
            Social Media
          </Button>
          <Button
            onClick={() => onCategorySelect?.('Email')}
            variant="ghost"
            size="sm"
            className="rounded-full text-white hover:bg-white/10"
          >
            Emails
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
