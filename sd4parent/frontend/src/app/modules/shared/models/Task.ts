import { Project } from './Project';
import { User } from './User';
import { EnumPipe } from '../pipes/enum.pipe';

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

  static isEqual(task: Task, anotherTask: Task): boolean {
    if (!task || !anotherTask) {
      return false;
    }
    if (task === anotherTask) {
      return true;
    }
    const enumPipe: EnumPipe = new EnumPipe();
    return task.id === anotherTask.id &&
      task.code === anotherTask.code &&
      task.project.id === anotherTask.project.id &&
      task.reporter.id === anotherTask.reporter.id &&
      task.assignee.id === anotherTask.assignee.id &&
      enumPipe.transform(task.status) === enumPipe.transform(anotherTask.status) &&
      enumPipe.transform(task.priority) === enumPipe.transform(anotherTask.priority) &&
      task.description === anotherTask.description &&
      task.created === anotherTask.created &&
      task.updated === anotherTask.updated &&
      task.estimation === anotherTask.estimation;
  }
}
