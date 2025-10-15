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

export const mentorNavItemsMain: MenuItem[] = [
  { title: "Dashboard", url: "/mentor/dashboard", icon: Home },
  {
    title: "Projects",
    url: "/mentor/projects",
    icon: BookOpen,
    variant: "highlight",
  },
  {
    title: "Applications",
    url: "/mentor/applications",
    icon: CheckSquare,
  },
  { title: "Students", url: "/mentor/students", icon: Users },
  { title: "Profile", url: "/mentor/profile", icon: Settings },
];

export const mentorNavItemsOther: MenuItem[] = [
  { title: "Notifications", url: "/mentor/notifications", icon: Bell },
  { title: "Messages", url: "/mentor/messages", icon: Inbox },
  { title: "Resources", url: "/mentor/resources", icon: FileText },
  { title: "Help Center", url: "/mentor/help", icon: HelpCircle },
];
