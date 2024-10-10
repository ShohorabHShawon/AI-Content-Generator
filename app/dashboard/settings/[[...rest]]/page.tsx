import { UserProfile } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="relative h-screen w-screen">
      {/* Back Button */}
      <Link href="/dashboard">
        <button className="absolute top-4 left-4 p-2 bg-primary rounded-md text-white transition duration-300 hover:scale-105 hover:bg-red-900">
          <ArrowLeft />
        </button>
      </Link>

      {/* Centered UserProfile */}
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex items-center justify-center h-full ">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default Page;
