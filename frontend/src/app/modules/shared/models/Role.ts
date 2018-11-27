export class Role {

  id: number;
  name: string;

  static clone(role: Role): Role {
    if (role == null) {
      return null;
    }
    let cloned = new Role();
    cloned.id = role.id;
    cloned.name = role.name;
    return cloned;
  }
}
