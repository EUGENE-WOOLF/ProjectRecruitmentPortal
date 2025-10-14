"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, BookOpen, Users, CheckCircle } from "lucide-react";

const navItems: { href: string; label: string; icon: React.ElementType }[] = [
  { href: "/student/dashboard", label: "Dashboard", icon: Home },
  { href: "/student/projects", label: "Projects", icon: FileText },
  { href: "/student/requests", label: "Requests", icon: CheckCircle },
  { href: "/professor/courses", label: "Courses", icon: BookOpen },
  { href: "/professor/reviews", label: "Reviews", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname() || "/";

  return (
    <aside className="w-64 bg-white/6 backdrop-blur-md border-r border-white/10 text-sm text-white h-screen sticky top-0">
      <div className="p-4 border-b border-white/8">
        <div className="text-lg font-semibold">Student Portal</div>
      </div>

      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-colors ${
                    isActive ? "bg-white/12 font-medium" : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto p-4 border-t border-white/8">
        <div className="text-xs text-white/80">v0.1 • Dev</div>
      </div>
    </aside>
  );
}
