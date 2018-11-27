import { User } from './User';

export class Project {

  id: number;
  code: string;
  description: string;
  owner: User;
  created: Date;
  updated: Date;
  closed: Date;

  constructor() {
    this.created = new Date(Date.now());
    this.updated = new Date(Date.now());
  }

  static clone(project: Project): Project {
    if (project == null) {
      return null;
    }
    let cloned = new Project();
    cloned.id = project.id;
    cloned.code = project.code;
    cloned.description = project.description;
    cloned.owner = User.clone(project.owner);
    cloned.created = project.created;
    cloned.updated = project.updated;
    cloned.closed = project.closed;
    return cloned;
  }
}
