import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthUser } from '../types/portfolio';

interface AdminStore {
  // State
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;

  // Actions
  login: (user: AuthUser, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useAdminStore = create<AdminStore>()(
  devtools(
    persist(
      (set) => ({
        // State
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,

        // Actions
        login: (user, token) => {
          localStorage.setItem('authToken', token);
          set({
            user,
            token,
            isAuthenticated: true,
            error: null,
          });
        },

        logout: () => {
          localStorage.removeItem('authToken');
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            error: null,
          });
        },

        setLoading: (loading) => set({ loading }),
        setError: (error) => set({ error }),
        clearError: () => set({ error: null }),
      }),
      {
        name: 'admin-storage',
        partialize: (state) => ({
          user: state.user,
          token: state.token,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    {
      name: 'admin-store',
    }
  )
);
