// src/constants/roles.ts
export type Role = "student" | "mentor" | "professor";

export const rolePermissions: Record<Role, string> = {
  student: "/student",
  mentor: "/mentor",
  professor: "/professor",
};

export function canAccess(role: Role, path: string): boolean {
  const basePath = rolePermissions[role];
  return path.startsWith(basePath);
}
