"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../TemplateSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (ev: any) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (ev: any) => {
    ev.preventDefault();
    userFormInput(formData);
  };

  return (
    <>
        <div className="p-5 shadow-md border rounded-lg bg-white">
          <Image
            src={selectedTemplate?.icon}
            alt="icon"
            width={80}
            height={80}
          />
          <h2 className="font-bold text-2xl mb-2 mt-4">
            {selectedTemplate?.name}
          </h2>
          <p className="m-2">{selectedTemplate?.description}</p>

          <form className="mt-6" onSubmit={onSubmit}>
            {selectedTemplate?.form.map(
              (item: {
                label: string;
                field: string;
                placeholder?: string;
              }) => (
                <div className="mb-2 flex flex-col gap-2" key={item.label}>
                  <label className="font-bold">{item.label}</label>
                  {item.field == "input" ? (
                    <Input
                      placeholder={item.label}
                      name={item.name}
                      required={item?.required}
                      onChange={handleInputChange}
                    />
                  ) : item.field == "textarea" ? (
                    <Textarea
                      placeholder={item.placeholder}
                      name={item.name}
                      required={item?.required}
                      onChange={handleInputChange}
                    />
                  ) : null}
                </div>
              )
            )}
            <Button
              type="submit"
              className="w-full py-5 mt-2 "
              disabled={loading}
            >
              {loading && <Loader2Icon className="animate-spin" />}
              Generate
            </Button>
          </form>
        </div>
    </>
  );
}

export default FormSection;
