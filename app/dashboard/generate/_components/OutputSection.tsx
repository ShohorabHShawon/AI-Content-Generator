import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef: any = useRef();
  const [copied, setCopied] = useState(false); // State to track if text is copied

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownText = editorInstance.getMarkdown();
    navigator.clipboard
      .writeText(markdownText)
      .then(() => {
        console.log("Text copied to clipboard!");
        setCopied(true); // Set copied to true when the text is copied
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="bg-white shadow-md border rounded-lg">
      <div className="flex justify-between items-center p-2 mx-2">
        <h2 className="text-lg font-semibold text-gray-800 p-2">
          Generated Text
        </h2>
        <Button
          onClick={handleCopy}
          className="hover:text'Copy'"
        >
          {copied ? <Check /> : <Copy />}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Generated text will appear here"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        height="600px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
