"use client";
import React from "react";
import Link from "next/link";

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
import {
  studnetNavItemsMain,
  studentNavItemsOther,
} from "@/constants/studentNavItems";
import { profNavItemsMain, profNavItemsOther } from "@/constants/profNavItems";
import {
  mentorNavItemsMain,
  mentorNavItemsOther,
} from "@/constants/mentorNavItems";

interface AppSidebarProps {
  currentPath?: string;
  role?: "student" | "professor" | "mentor";
}

const getRoleNavItems = (role: string) => {
  switch (role) {
    case "professor":
      return { main: profNavItemsMain, other: profNavItemsOther };
    case "mentor":
      return { main: mentorNavItemsMain, other: mentorNavItemsOther };
    default:
      return { main: studnetNavItemsMain, other: studentNavItemsOther };
  }
};

const AppSidebar = ({
  currentPath = "",
  role = "student",
}: AppSidebarProps) => {
  const { main: mainMenuItems, other: otherMenuItems } = getRoleNavItems(role);
  const getRoleTitle = (role: string) => {
    return role.charAt(0).toUpperCase() + role.slice(1) + " Portal";
  };

  return (
    <SidebarProvider defaultOpen>
      <Sidebar className="border-r border-white/10 bg-[#0A0F1E] text-white h-screen shadow-xl shadow-black/20 fixed top-0 left-0 w-64">
        <SidebarContent className="p-6 flex flex-col h-full bg-gradient-to-b from-[#0A0F1E] via-[#111827] to-[#0A0F1E] overflow-y-auto">
          {/* Logo and Search */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 px-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-xl font-bold">P</span>
              </div>
              <span className="text-lg font-semibold text-white">
                {getRoleTitle(role)}
              </span>
            </div>
          </div>

          {/* Main Menu */}
          <SidebarGroup className="mt-8">
            <SidebarMenu className="space-y-1">
              {mainMenuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                          "hover:bg-[#1C2333]",
                          isActive || item.variant === "highlight"
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20"
                            : "hover:translate-x-1"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </Link>
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
                const isActive = currentPath === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                          isActive
                            ? "text-white bg-[#1C2333]"
                            : "text-gray-400 hover:text-white hover:bg-[#1C2333] hover:translate-x-1"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </Link>
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
                  User Name(to be dynamic )
                </div>
                <div className="text-xs text-gray-400 truncate">
                  user Email (to be dynamic )
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
