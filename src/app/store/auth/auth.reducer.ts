import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState, initialState } from './auth.state';

const _authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user: { email: user.email },
    loading: false,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(AuthActions.signUp, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.signUpSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user: {
      email: user.email,
      password: user.password,
      repeatPassword: user.repeatPassword,
    },
    loading: false,
    error: null,
  })),
  on(AuthActions.signUpFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
