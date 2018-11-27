export class Priority {

  id: number;
  name: string;

  static clone(priority: Priority): Priority {
    if (priority == null) {
      return null;
    }
    let cloned = new Priority();
    cloned.id = priority.id;
    cloned.name = priority.name;
    return cloned;
  }
}
