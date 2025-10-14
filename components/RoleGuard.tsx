// src/components/RoleGuard.tsx

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { getSession } from "@/lib/auth";
import { canAccess, rolePermissions, Role } from "@/constants/roles";
import { redirect } from "next/navigation";

interface RoleGuardProps {
  allowedRoles: Role[];
  children: ReactNode;
}

export default function RoleGuard({ allowedRoles, children }: RoleGuardProps) {
  const session = getSession();
  const pathname = usePathname() || "/";

  // Not logged in → go to login
  if (!session) {
    redirect("/auth/login");
  }

  // Logged in but role not allowed → redirect to default dashboard
  if (!allowedRoles.includes(session.role)) {
    const defaultPath = rolePermissions[session.role] || "/";
    redirect(defaultPath);
  }

  // Optional: additional check using canAccess
  if (!canAccess(session.role, pathname)) {
    const defaultPath = rolePermissions[session.role] || "/";
    redirect(defaultPath);
  }

  return <>{children}</>;
}
