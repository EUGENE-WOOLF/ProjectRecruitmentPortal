"use client";

import RoleGuard from "@/components/RoleGuard";
import AppSidebar from "@/components/shared/Sidebar/Sidebar";
import { usePathname } from "next/navigation";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <RoleGuard allowedRoles={["student"]}>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="h-screen flex">
          <div className="w-64 flex-shrink-0">
            <AppSidebar currentPath={pathname} role="student" />
          </div>
          <main className="flex-1 overflow-y-auto p-8 text-white">
            {children}
          </main>
        </div>
      </div>
    </RoleGuard>
  );
}

//from-gray-900 to-black
