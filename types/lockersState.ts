export enum Privacy {
  Public = 'public',
  Private = 'private',
}

export enum Role {
  Admin = 'admin',
  User = 'user',
}

export interface Locker {
  _id?: string;
  classroom: string;
  createdAt?: Date;
  email: string;
  password: string;
  img?: string;
  privacy?: Privacy.Public | Privacy.Private;
  role?: Role.Admin | Role.User;
  schoolName: string;
  student: string;
  title: string;
}

export interface AuthLockerState {
  lockers: Locker[];
  currentLocker: Locker | null;
  isLoading: boolean;
  error: null | {message: string};
  isAdmin: boolean;
  isAuthenticated: boolean;
}

export interface ValidationErrors {
  message: string;
}

export interface UpdateLockerResponse {
  locker: Locker;
  message: string;
}
