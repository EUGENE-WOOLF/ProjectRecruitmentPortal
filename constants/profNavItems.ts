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

export const profNavItemsMain: MenuItem[] = [
  { title: "Dashboard", url: "/professor/", icon: Home },
  {
    title: "Projects",
    url: "/professor/projects",
    icon: BookOpen,
  },
  {
    title: "Research Interests",
    url: "/professor/research-interests",
    icon: CheckSquare,
  },
  { title: "Students", url: "/professor/students", icon: Users },
  { title: "Profile", url: "/professor/profile", icon: Settings },
];

export const profNavItemsOther: MenuItem[] = [
  { title: "Messages", url: "/professor/messages", icon: Inbox },
  { title: "Resources", url: "/professor/resources", icon: FileText },
  { title: "Help Center", url: "/professor/help", icon: HelpCircle },
];
