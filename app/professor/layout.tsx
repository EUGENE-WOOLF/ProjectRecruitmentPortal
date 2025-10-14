// src/app/professor/courses/layout.tsx
import RoleGuard from "@/components/RoleGuard";

export default function ProfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RoleGuard allowedRoles={["professor"]}>{children}</RoleGuard>;
}
