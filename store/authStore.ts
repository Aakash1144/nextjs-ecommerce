import { create } from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;

  login: (email: string, password: string) => void;
  logout: () => void;
  register: (name: string, email: string, password: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (email) =>
    set({
      user: {
        id: 1,
        name: "Aakash Arora",
        email,
      },
      isAuthenticated: true,
    }),

  register: (name, email) =>
    set({
      user: {
        id: 1,
        name,
        email,
      },
      isAuthenticated: true,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));