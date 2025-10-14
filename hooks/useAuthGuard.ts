"use client";

import { useState, useEffect } from "react";
import { getSession } from "@/lib/authMock";

export function useAuth() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = getSession(); // synchronous for mock
    if (session) {
      setIsLoggedIn(true);
      setUserRole(session.role);
    }
  }, []);

  return { userRole, isLoggedIn };
}
