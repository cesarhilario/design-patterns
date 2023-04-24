import { User } from '../types';

const users: User[] = [];

export const MyDatabaseModule = {
  addUser(user: User): void {
    users.push(user);
  },

  removeUser(index: number): void {
    users.splice(index, 1);
  },

  showUsers(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
