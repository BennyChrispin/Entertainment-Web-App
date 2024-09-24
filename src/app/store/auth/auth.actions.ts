import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: { email: string } }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const signUp = createAction(
  '[Auth] Sign Up',
  props<{ email: string; password: string; repeatPassword: string }>()
);

export const signUpSuccess = createAction(
  '[Auth] Sign Up Success',
  props<{ user: { email: string; password: string; repeatPassword: string } }>()
);

export const signUpFailure = createAction(
  '[Auth] Sign Up Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
