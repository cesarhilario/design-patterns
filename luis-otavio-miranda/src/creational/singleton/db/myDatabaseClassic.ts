import { User } from '../types';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;

  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  private users: User[] = [];

  public addUser(user: User): void {
    this.users.push(user);
  }

  public removeUser(index: number): void {
    this.users.splice(index, 1);
  }

  public showUsers(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}
