// src/lib/auth.ts
import { Role } from "@/constants/roles";

export interface UserSession {
  email: string;
  role: Role;
}

let mockUser: UserSession | null = {
  email: "student@example.com",
  role: "student",
};

// mock login
export function loginAs(role: Role) {
  mockUser = { email: `${role}@example.com`, role };
}

export function logout() {
  mockUser = null;
}

export function getSession(): UserSession | null {
  return mockUser;
}

//I wish there was a girl I like but there ins't one
