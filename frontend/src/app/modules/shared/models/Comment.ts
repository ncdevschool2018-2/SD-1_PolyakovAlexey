import { User } from './User';
import { Task } from './Task';


export class Comment {

  id: number;
  text: string;
  user: User;
  task: Task;
  created: Date;

  constructor() {
    this.created = new Date(Date.now());
  }

  static clone(comment: Comment): Comment {
    if (comment == null) {
      return null;
    }
    let cloned = new Comment();
    cloned.id = comment.id;
    cloned.text = comment.text;
    cloned.user = User.clone(comment.user);
    cloned.task = Task.clone(comment.task);
    cloned.created = comment.created;
    return cloned;
  }
}
