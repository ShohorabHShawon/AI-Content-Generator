"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
    <div className="p-3 bg-primary shadow-md flex justify-between items-center">
      <div className="mx-4 flex items-center bg-white rounded-full p-1 hover:scale-125 transition duration-200 ease-in-out">
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
