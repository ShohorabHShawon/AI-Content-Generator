import React, { useEffect, useState } from 'react';
import Template from '@/app/(data)/Template'; // Your template data
import TemplateCard from './TemplateCard';
import { Ghost } from 'lucide-react';

// The interfaces from your original code
export interface TEMPLATE {
  name: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}
export interface FORM {
  label?: string;
  field: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}

// A simple skeleton card component for the loading state
const SkeletonCard = () => (
  <div className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
      <div className="flex-1 space-y-3 pt-1">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
        <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Props now include an optional isLoading flag
type TemplateSectionProps = {
  userSearchInput: string;
  isLoading?: boolean; // Optional loading prop
};

function TemplateSection({
  userSearchInput,
  isLoading = false,
}: TemplateSectionProps) {
  const [templateList, setTemplateList] = useState<TEMPLATE[]>([]);

  useEffect(() => {
    // This logic now only runs when not loading
    if (!isLoading) {
      if (userSearchInput) {
        const filteredTemplates = Template.filter((item) => {
          const searchTerm = userSearchInput.toLowerCase();
          return (
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
          );
        });
        setTemplateList(filteredTemplates);
      } else {
        setTemplateList(Template);
      }
    }
  }, [userSearchInput, isLoading]);

  // 1. Render the Loading State
  if (isLoading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Create a dummy array to render 8 skeleton cards */}
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  // 2. Render the Empty State
  if (templateList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20">
        <Ghost className="h-16 w-16 text-slate-400 dark:text-slate-500 mb-4" />
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
          No Templates Found
        </h3>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          We couldn&apos;t find any templates matching your search.
        </p>
      </div>
    );
  }

  // 3. Render the Content State
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {templateList.map((item: TEMPLATE) => (
          // The wrapper div now handles the hover effect using default Tailwind classes
          <div
            key={item.slug} // Using the stable, unique slug for the key
            className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/10 dark:hover:shadow-black/30 rounded-lg"
          >
            <TemplateCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateSection;
