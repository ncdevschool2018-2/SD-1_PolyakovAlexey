export class Task {
  task_id: string;
  projectCode: string;
  summary: string;
  priority: string;
  estimation: string;
  assignee: string;

  static cloneBase(task: Task): Task {
    let clonedTask: Task = new Task();
    clonedTask.task_id = task.task_id;
    clonedTask.projectCode = task.projectCode;
    clonedTask.summary = task.summary;
    clonedTask.priority = task.priority;
    clonedTask.estimation = task.estimation;
    clonedTask.assignee = task.assignee;
    return clonedTask;
  }
}
