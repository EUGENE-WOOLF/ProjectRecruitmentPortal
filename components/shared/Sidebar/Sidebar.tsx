"use client";

import React from "react";
import {
  Home,
  Bell,
  CheckSquare,
  Settings,
  FileText,
  UserPlus,
  Inbox,
  HelpCircle,
  LucideIcon,
  Search,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import { useAuthStore } from "@/app/stores/auth/authStore";

// Define menu item type
interface MenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
  variant?: "default" | "highlight";
}

const mainMenuItems: MenuItem[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "Projects", url: "/projects", icon: Bell },
  {
    title: "Requests",
    url: "/requests",
    icon: CheckSquare,
    variant: "highlight",
  },
  { title: "Porfile", url: "/settings", icon: Settings },
];

const otherMenuItems: MenuItem[] = [
  { title: "Documents", url: "/docs", icon: FileText },
  { title: "Inbox", url: "/inbox", icon: Inbox },
  { title: "Support", url: "/support", icon: HelpCircle },
];

const AppSidebar = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <SidebarProvider defaultOpen>
      <Sidebar className="border-r border-white/10 bg-[#0A0F1E] text-white h-screen shadow-xl shadow-black/20">
        <SidebarContent className="p-6 flex flex-col h-full bg-gradient-to-b from-[#0A0F1E] via-[#111827] to-[#0A0F1E]">
          {/* Logo and Search */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 px-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-xl font-bold">P</span>
              </div>
              <span className="text-lg font-semibold text-white">
                Student Portal
              </span>
            </div>
          </div>

          {/* Main Menu */}
          <SidebarGroup className="mt-8">
            <SidebarMenu className="space-y-1">
              {mainMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                          "hover:bg-[#1C2333]",
                          item.variant === "highlight"
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20"
                            : "hover:translate-x-1"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>

          {/* Other Section */}
          <SidebarGroup className="mt-10">
            <SidebarGroupLabel className="px-3 text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2">
              OTHER
            </SidebarGroupLabel>
            <SidebarMenu className="space-y-1">
              {otherMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#1C2333] hover:translate-x-1 transition-all duration-200"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>

          {/* Push user profile to bottom */}
          <div className="flex-1" />

          {/* User Profile */}
          <div className="mt-6 px-3 py-3 rounded-lg hover:bg-[#1C2333] cursor-pointer transition-all duration-200 bg-[#111827] border border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-sm font-medium">US</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">
                  {" "}
                  {user ? user.name : "User Name"}
                </div>
                <div className="text-xs text-gray-400 truncate">
                  {user ? user.email : "user@example.com"}
                </div>
              </div>
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};

export default AppSidebar;
