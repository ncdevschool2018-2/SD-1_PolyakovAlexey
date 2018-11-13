export class User {
  id: number;
  username: string;
  password: string;
  role: string;
  currentProjectId: number;

  static cloneBase(user: User): User {
    const clonedUser: User = new User();
    clonedUser.id = user.id;
    clonedUser.username = user.username;
    clonedUser.password = user.password;
    clonedUser.role = user.role;
    clonedUser.currentProjectId = user.currentProjectId;
    return clonedUser;
  }
}
