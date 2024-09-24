import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth/auth.actions';

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const repeatPassword = control.get('repeatPassword');
  return password && repeatPassword && password.value !== repeatPassword.value
    ? { mismatch: true }
    : null;
};

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss'],
})
export class LoginSignupComponent implements OnInit {
  isLogin: boolean = true;
  authForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.authForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPassword: ['', [Validators.required]],
      },
      { validators: passwordMatchValidator }
    );
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const formValues = this.authForm.value;

    if (this.isLogin) {
      this.store.dispatch(
        AuthActions.login({
          email: formValues.email,
          password: formValues.password,
        })
      );
    } else {
      this.store.dispatch(
        AuthActions.signUp({
          email: formValues.email,
          password: formValues.password,
          repeatPassword: formValues.repeatPassword,
        })
      );
    }
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.authForm.reset();
  }
}
