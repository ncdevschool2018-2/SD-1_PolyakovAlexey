import {User} from "./User";

export class Project {
  id: number;
  code: string;
  owner: User;
  description: string;
  created: string;
  closed: string;

  static cloneBase(project: Project): Project {
    let clonedProject: Project = new Project();
    clonedProject.id = project.id;
    clonedProject.code = project.code;
    clonedProject.owner = User.cloneBase(project.owner);
    clonedProject.description = project.description;
    clonedProject.created = project.created;
    clonedProject.closed = project.closed;
    return clonedProject;
  }
}
