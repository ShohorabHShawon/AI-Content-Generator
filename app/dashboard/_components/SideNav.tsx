"use client";
import { History, Home, Settings, WalletCards, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function SideNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = [
    {
      name: "Home",
      icon: Home,
      link: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      link: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      link: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      link: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log("Current path:", path);
  }, [path]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("Menu open state:", !isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 p-1 shadow-sm bg-white z-50">
      {/* Logo and Hamburger button */}
      <div className="flex justify-between items-center">
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </div>

      <div
        className={`flex space-x-4 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex transition-all duration-300`}
      >
        {menuList.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <div
              className={`font-bold flex items-center space-x-2 p-2 
                hover:bg-primary hover:text-white rounded-md cursor-pointer
                ${path === menu.link ? "bg-primary text-white" : ""}`}
            >
              <menu.icon size={24} />
              <span>{menu.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
