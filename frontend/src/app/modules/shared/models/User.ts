import { Role } from './Role';
import { Project } from './Project';

export class User {

  id: number;
  username: string;
  password: string;
  role: Role;
  avatar: string;
  projects: Project[];

  constructor() {
    this.avatar = 'path';
  }

  static clone(user: User): User {
    if (user == null) {
      return null;
    }
    let cloned: User = new User();
    cloned.id = user.id;
    cloned.username = user.username;
    cloned.password = user.password;
    cloned.role = Role.clone(user.role);
    cloned.avatar = user.avatar;
    cloned.projects = user.projects;
    return cloned;
  }
}
