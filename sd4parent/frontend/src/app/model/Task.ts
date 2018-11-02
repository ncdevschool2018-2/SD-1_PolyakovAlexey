import {Project} from "./Project";
import {User} from "./User";
import {Status} from "./enums/Status";
import {Priority} from "./enums/Priority";

export class Task {
  id: number;
  code: string;
  project: Project;
  reporter: User;
  assignee: User;
  status: Status;
  priority: Priority;
  description: string;
  created: string;
  due_date: string;
  updated: string;
  estimation: string;

  static cloneBase(task: Task): Task {
    let clonedTask: Task = new Task();
    clonedTask.id = task.id;
    clonedTask.code = task.code;
    clonedTask.reporter = User.cloneBase(task.reporter);
    clonedTask.assignee = User.cloneBase(task.assignee);
    clonedTask.status = task.status;
    clonedTask.priority = task.priority;
    clonedTask.description = task.description;
    clonedTask.created = task.created;
    clonedTask.due_date = task.due_date;
    clonedTask.updated = task.updated;
    clonedTask.estimation = task.estimation;
    return clonedTask;
  }
}
