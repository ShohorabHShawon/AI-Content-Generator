'use client';
import React from 'react';
import SearchSection from './_components/SearchSection';
import TemplateSection from './_components/TemplateSection';
import { useState } from 'react';

const dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>('');
  return (
    <div className="mt-14">
      {/* Search */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />

      {/* Template Section */}
      <TemplateSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default dashboard;
