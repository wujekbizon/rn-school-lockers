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
  isRegistered: boolean;
}

export interface ValidationErrors {
  message: string;
}

export interface UpdateLockerResponse {
  locker: Locker;
  message: string;
}

export interface Rumor {
  _id: string;
  userId: string;
  title: string;
  content: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

export interface RumorsState {
  rumors: Rumor[];
  modifiedRumorsIndexes: number[];
  isLoading: boolean;
  isDeleting: boolean;
  error: null | {message: string};
  isRumorModalOpen: boolean;
}
