// src/constants/roles.ts
export type Role = "student" | "mentor" | "professor";

// Base route per role (used for redirects)
export const rolePermissions: Record<Role, string> = {
  student: "/student",
  mentor: "/mentor",
  professor: "/professor",
};

// Check if a role can access a path
export function canAccess(role: Role, path: string): boolean {
  const basePath = rolePermissions[role];
  return path.startsWith(basePath);
}
