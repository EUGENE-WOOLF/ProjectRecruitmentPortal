import { Home, FileText, BookOpen, Users, CheckCircle } from "lucide-react";

export const studnetNavItems: {
  href: string;
  label: string;
  icon: React.ElementType;
}[] = [
  { href: "/student/dashboard", label: "Dashboard", icon: Home },
  { href: "/student/projects", label: "Projects", icon: FileText },
  { href: "/student/requests", label: "Requests", icon: CheckCircle },
  { href: "/professor/courses", label: "Courses", icon: BookOpen },
  { href: "/professor/reviews", label: "Reviews", icon: Users },
];

// export const professorNavItems: {
//   href: string;
//   label: string;
//   icon: React.ElementType;
// }[];
