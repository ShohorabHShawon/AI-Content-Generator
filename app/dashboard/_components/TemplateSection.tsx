import Template from "@/app/(data)/Template";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

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

function TemplateSection({ userSearchInput }: any) {
  const [templetList, setTemplateList] = useState(Template);
  useEffect(() => {
    console.log(userSearchInput);
    if (userSearchInput) {
      const filteredTemplates = Template.filter((item) => {
        return item.name.toLowerCase().includes(userSearchInput.toLowerCase());
      });
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(Template);
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {templetList.map((item: TEMPLATE, index: number) => (
        <div key={index}>
          <TemplateCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default TemplateSection;
