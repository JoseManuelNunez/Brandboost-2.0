import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LoginDto, RegisterDto, AuthResponse } from '../interfaces/auth.interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private baseUrl = environment.baseUrl;

  constructor() {
    console.log('AuthService initialized with baseUrl:', this.baseUrl);
  }

  // Signal para exponer el usuario actual globalmente
  currentUser = signal<any | null>(this.getUserFromStorage());

  private getUserFromStorage(): any | null {
    try {
      const user = localStorage.getItem('user');
      if (!user || user === 'undefined') return null;
      return JSON.parse(user);
    } catch (e) {
      console.error('Error parsing user from storage', e);
      return null;
    }
  }

  login(loginDto: LoginDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, loginDto).pipe(
      tap(res => {
        if (res && res.token) {
          this.setSession(res);
        }
      }),
      catchError(this.handleError)
    );
  }

  register(registerDto: RegisterDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/register`, registerDto).pipe(
      tap(res => {
        if (res && res.token) {
          this.setSession(res);
        }
      }),
      catchError(this.handleError)
    );
  }

  private setSession(authResult: AuthResponse) {
    if (!authResult.token || !authResult.user) return;

    localStorage.setItem('token', authResult.token);
    localStorage.setItem('user', JSON.stringify(authResult.user));
    this.currentUser.set(authResult.user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ha ocurrido un error inesperado';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // El backend retornó un código de error
      if (error.status === 401) {
        errorMessage = 'Credenciales incorrectas';
      } else if (error.status === 400) {
        errorMessage = error.error?.message || 'Datos inválidos';
      } else if (error.status === 409) {
        errorMessage = 'El usuario ya existe';
      } else if (error.status === 500) {
        errorMessage = 'Error en el servidor, inténtalo más tarde';
      } else if (error.status === 0) {
        errorMessage = 'No se pudo conectar con el servidor';
      }
    }

    return throwError(() => errorMessage);
  }
}
