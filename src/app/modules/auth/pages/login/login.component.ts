import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  // Signals para el estado reactivo
  isLogin = signal<boolean>(true);
  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  registerForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellidos: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.pattern(/^[0-9]{9,15}$/)]]
  });

  toggleAuth(value: boolean) {
    this.isLogin.set(value);
    this.errorMessage.set(null);
  }

  onSubmit() {
    if (this.isLogin()) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/negocio']);
      },
      error: (message: string) => {
        this.isLoading.set(false);
        this.errorMessage.set(message);
      }
    });
  }

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const { nombre, apellidos, ...rest } = this.registerForm.value;
    const registerData = {
      nombre: `${nombre} ${apellidos}`,
      ...rest
    };

    this.authService.register(registerData).subscribe({
      next: () => {
        this.router.navigate(['/negocio']);
      },
      error: (message: string) => {
        this.isLoading.set(false);
        this.errorMessage.set(message);
      }
    });
  }

  isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }

  navegarInicio() {
    this.router.navigate(['/']);
  }

  navegarLogin() {
    this.isLogin.set(true);
  }
}
