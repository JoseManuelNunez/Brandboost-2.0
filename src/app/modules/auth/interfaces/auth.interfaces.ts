export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  nombre: string;
  email: string;
  password: string;
  phone?: string;
  image_profile?: string;
}

export interface AuthResponse {
  user: any;
  token: string;
}
