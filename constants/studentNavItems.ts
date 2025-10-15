import {
  Home,
  FileText,
  BookOpen,
  Users,
  CheckCircle,
  Inbox,
  HelpCircle,
  Bell,
  CheckSquare,
  Settings,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
//these navitems are for the students , prof and mentor

interface MenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
  variant?: "default" | "highlight";
}

export const studnetNavItemsMain: MenuItem[] = [
  { title: "Dashboard", url: "/student/dashboard", icon: Home },
  { title: "Projects", url: "/student/projects", icon: BookOpen },
  {
    title: "Requests",
    url: "/student/requests",
    icon: CheckSquare,
  },
  {
    title: "Submissions",
    url: "/student/submissions",
    icon: FileText,
  },
  { title: "Profile", url: "/student/profile", icon: Settings },
];

export const studentNavItemsOther: MenuItem[] = [
  { title: "Notifications", url: "/student/notifications", icon: Bell },
  { title: "Messages", url: "/student/messages", icon: Inbox },
  { title: "Help Center", url: "/student/help", icon: HelpCircle },
];
