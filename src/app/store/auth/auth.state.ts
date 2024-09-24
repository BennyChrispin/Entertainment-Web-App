export interface AuthState {
  user: { email: string; password?: string; repeatPassword?: string } | null; // Make password and RepeatPassword optional
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};
