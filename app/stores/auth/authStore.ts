// src/stores/authStore.ts
import { create } from "zustand";

interface User {
  name: string;
  email: string;
  role: "student" | "mentor" | "professor";
}

interface AuthStore {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
