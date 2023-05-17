export class User {
  id?: number = undefined;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  role: UserRole = UserRole.None;
  profilePicture?: string = undefined;
  status: boolean = false;
  datePublished: number = Date.now();
}

export enum UserRole {
  Cook,
  Moderator,
  Admin,
  None,
}
