"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateSection";
import Template from "@/app/(data)/Template";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface PROPS {
  params: {
    templateSlug: string;
  };
}

function generate(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Template?.find(
    (item) => item.slug == props.params["template-slug"]
  );
  const [loading, setLoading] = useState(false);

  const [aiOutput, setAiOutput] = useState<string>("");

  const {user}=useUser();

  const generateAIContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);

    setAiOutput(result?.response.text());
    await SaveInDB(formData, selectedTemplate?.slug, result?.response.text());
    setLoading(false);
  };


  const SaveInDB = async (formData: any, slug:any, aiResponse:string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiOutput,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-YYYY HH:mm:ss"),
    });
    console.log(result);
  }

  return (
    <>
      <div>
        <Link href="/dashboard">
          <button className="p-2 m-2 bg-primary rounded-md text-white transition duration-300 hover:scale-105 hover:bg-red-900">
            <ArrowLeft />
          </button>
        </Link>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
          {/* form section */}
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={(data: any) => generateAIContent(data)}
            loading={loading}
          />
          {/* output section */}
          <div className="col-span-2">
            <OutputSection aiOutput={aiOutput} />
          </div>
        </div>
      </div>
    </>
  );
}
export default generate;
