import { MyDatabaseModule } from './db/myDatabaseModule';
import { MyDatabaseClassic } from './db/myDatabaseClassic';
import { MyDatabaseFunction } from './db/myDatabaseFunction';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.addUser({ name: 'Luíza', age: 24 });
myDatabaseClassic.addUser({ name: 'Giovana', age: 30 });
myDatabaseClassic.addUser({ name: 'Alonso', age: 50 });

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.addUser({ name: 'César', age: 25 });
myDatabaseModule.addUser({ name: 'William', age: 25 });
myDatabaseModule.addUser({ name: 'Silvia', age: 25 });
myDatabaseModule.showUsers();

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.addUser({ name: 'Alice', age: 30 });
myDatabaseFunction.addUser({ name: 'Rogério', age: 40 });
myDatabaseFunction.addUser({ name: 'Amanda', age: 60 });

export { myDatabaseClassic, myDatabaseModule, myDatabaseFunction };
