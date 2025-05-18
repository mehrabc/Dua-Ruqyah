"use client"
import Image from "next/image"
import {
  Home,
  BookOpen,
  Calendar,
  Clock,
  Compass,
  Heart,
  Moon,
  Settings,
  Sun,
  Users,
  HomeIcon,
} from "lucide-react";

import { DuasIcon } from "./SideBarItems/DuasIcon";
import { useEffect, useState } from "react";
import { HomeIcons } from "./SideBarItems/HomeIcon";
import { DuaCategoriesIcon } from "./SideBarItems/DuaCategoryIcon";
import { BookmarkIcon } from "./SideBarItems/BookmarkIcon";
import { RuqyahIcon } from "./SideBarItems/RuqyahIcon";

const sidebarItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Dua", icon: BookOpen, href: "/dua" },
  { name: "Memorize", icon: Heart, href: "/memorize" },
  { name: "Bookmark", icon: BookOpen, href: "/bookmark" },
  { name: "Ruqyah", icon: Moon, href: "/ruqyah" },
  { name: "Dua Qibla", icon: Compass, href: "/qibla" },
  { name: "Prayer Times", icon: Clock, href: "/prayer-times" },
  { name: "Calendar", icon: Calendar, href: "/calendar" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
  }, [activeTab])
  return (
    <aside className="fixed lg:left-0 lg:top-0 lg:h-full bottom-0 bg-lightGreen shadow-md px-[11.94px] py-3 lg:flex-col justify-center lg:justify-between flex flex-row w-full lg:max-w-[68px]">
      <Image
        src={`/logo.png`}
        width={44.11}
        height={44}
        alt="Company Logo"
        className="hidden lg:block" />
      <nav className=" flex lg:flex-col gap-6">
        <div onClick={() => setActiveTab("home")}>
          <HomeIcons isActive={activeTab === "home"} />
        </div>

        <div onClick={() => setActiveTab("category")}>
          <DuaCategoriesIcon isActive={activeTab === "category"} />
        </div>
        <div onClick={() => setActiveTab("duas")}>
          <DuasIcon isActive={activeTab === "duas"} />
        </div>
        <div onClick={() => setActiveTab("bookmarks")}>
          <BookmarkIcon isActive={activeTab === "bookmarks"} />
        </div>
        <div onClick={() => setActiveTab("ruqyah")}>
          <RuqyahIcon isActive={activeTab === "ruqyah"} />
        </div>

      </nav>
      <div className="hover:bg-border p-2 rounded-full hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-darkGreen">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>


    </aside>

  )
}

export default SideBar