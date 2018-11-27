export class Status {

  id: number;
  name: string;

  static clone(status: Status): Status {
    if (status == null) {
      return null;
    }
    let cloned = new Status();
    cloned.id = status.id;
    cloned.name = status.name;
    return cloned;
  }
}
