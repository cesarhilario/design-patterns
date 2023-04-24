import { User } from '../types';

export const MyDatabaseFunction = (function () {
  const users: User[] = [];

  return {
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
})();
