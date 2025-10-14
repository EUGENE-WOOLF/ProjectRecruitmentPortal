"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuthGuard"; // fixed import

interface RoleButtonProps {
  role: string;
  Icon?: React.ComponentType<{ className?: string }>; // compatible with Lucide icons
}

export default function RoleButton({ role, Icon }: RoleButtonProps) {
  const router = useRouter(); // ⚠️ router was missing
  const { userRole, isLoggedIn } = useAuth();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isLoggedIn && userRole) {
      router.push(`/${userRole}/dashboard`);
    } else {
      router.push(`/auth/register?role=${role.toLowerCase()}`);
    }
  };

  const buttonClasses =
    "flex items-center justify-center gap-2 px-6 py-3 min-w-[150px] " +
    "rounded-xl font-semibold text-white bg-slate-700 hover:bg-slate-800 " +
    "shadow-lg hover:shadow-xl transition-all duration-300 " +
    "focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-slate-400";

  return (
    <button
      onClick={handleClick}
      aria-label={`Register as ${role}`}
      className={buttonClasses}
      disabled={!isLoggedIn && userRole === null} // optional: prevent click while loading
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{role}</span>
    </button>
  );
}
