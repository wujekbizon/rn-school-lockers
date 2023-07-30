enum Privacy {
  Public = 'public',
  Private = 'private',
}

enum Role {
  Admin = 'admin',
  User = 'user',
}

export interface Locker {
  _id: string;
  classrom: string;
  createdAt: Date;
  email: string;
  password: string;
  img: string;
  privacy: Privacy.Public | Privacy.Private;
  role: Role.Admin | Role.User;
  schoolName: string;
  student: string;
  title: string;
}
