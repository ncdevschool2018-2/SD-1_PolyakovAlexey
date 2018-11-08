import {UserRole} from "./enums/UserRole";

export class User {
  id: number;
  username: string;
  password: string;
  role: UserRole;
  current_project_id: number;

  static cloneBase(user: User): User {
    let clonedUser: User = new User();
    clonedUser.id = user.id;
    clonedUser.username = user.username;
    clonedUser.password = user.password;
    clonedUser.role = user.role;
    clonedUser.current_project_id = user.current_project_id;
    return clonedUser;
  }
}
