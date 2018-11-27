import { Status } from './Status';
import { Priority } from './Priority';
import { User } from './User';
import { Project } from './Project';

export class Task {

  id: number;
  code: string;
  description: string;
  status: Status;
  priority: Priority;
  project: Project;
  reporter: User;
  assignee: User;
  created: Date;
  updated: Date;
  dueDate: Date;
  closed: Date;
  estimation: string;
  parents: Task[];
  related: Task[];

  constructor() {
    this.created = new Date(Date.now());
    this.updated = new Date(Date.now());
    this.estimation = '';
    this.status = {id: 1, name: 'open'};
  }

  static clone(task: Task): Task {
    if (task == null) {
      return null;
    }
    let cloned = new Task();
    cloned.id = task.id;
    cloned.code = task.code;
    cloned.description = task.description;
    cloned.status = Status.clone(task.status);
    cloned.priority = Priority.clone(task.priority);
    cloned.project = Project.clone(task.project);
    cloned.reporter = User.clone(task.reporter);
    cloned.assignee = User.clone(task.assignee);
    cloned.created = task.created;
    cloned.updated = task.updated;
    cloned.dueDate = task.dueDate;
    cloned.closed = task.closed;
    cloned.estimation = task.estimation;
    cloned.parents = task.parents;
    cloned.related = task.related;
    return cloned;
  }

  static compare(task: Task, anotherTask: Task): boolean {
    if (!task) {
      return false;
    }
    if (task === anotherTask) {
      return true;
    }
    return task.id === anotherTask.id &&
      task.code === anotherTask.code &&
      task.project.id === anotherTask.project.id &&
      task.reporter.id === anotherTask.reporter.id &&
      task.assignee.id === anotherTask.assignee.id &&
      task.status.id === anotherTask.status.id &&
      task.priority.id === anotherTask.priority.id &&
      task.description === anotherTask.description &&
      task.created === anotherTask.created &&
      task.updated === anotherTask.updated &&
      task.closed === anotherTask.updated &&
      task.estimation === anotherTask.estimation;
  }
}
