import { Project } from './Project';
import { User } from './User';

export class Task {
  id: number;
  code: string;
  project: Project;
  reporter: User;
  assignee: User;
  status = 'OPEN';
  priority: string;
  description: string;
  created: Date = new Date(Date.now());
  dueDate: Date;
  updated: Date = new Date(Date.now());
  estimation: string;

  static cloneBase(task: Task): Task {
    const clonedTask: Task = new Task();
    clonedTask.id = task.id;
    clonedTask.code = task.code;
    clonedTask.project = Project.cloneBase(task.project);
    clonedTask.reporter = User.cloneBase(task.reporter);
    clonedTask.assignee = User.cloneBase(task.assignee);
    clonedTask.status = task.status;
    clonedTask.priority = task.priority;
    clonedTask.description = task.description;
    clonedTask.created = task.created;
    clonedTask.dueDate = task.dueDate;
    clonedTask.updated = task.updated;
    clonedTask.estimation = task.estimation;
    return clonedTask;
  }
}
