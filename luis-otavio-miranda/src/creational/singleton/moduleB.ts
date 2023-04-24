import { MyDatabaseClassic } from './db/myDatabaseClassic';
import { MyDatabaseModule } from './db/myDatabaseModule';
import { MyDatabaseFunction } from './db/myDatabaseFunction';
import {
  myDatabaseClassic as myDatabaseClassicFromModuleA,
  myDatabaseModule as myDatabaseModuleFromModuleA,
  myDatabaseFunction as myDatabaseFunctionFromModuleA,
} from './moduleA';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.addUser({ name: 'Roberto', age: 24 });
myDatabaseClassic.addUser({ name: 'Joana', age: 30 });
myDatabaseClassic.addUser({ name: 'Maria', age: 50 });
myDatabaseClassic.showUsers();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA); // true

console.log('==== MyDatabaseModule ====');
const myDatabaseModule = MyDatabaseModule;

myDatabaseModule.addUser({ name: 'Godofredo', age: 50 });
myDatabaseModule.showUsers();

console.log(myDatabaseModule === myDatabaseModuleFromModuleA); // true

console.log('==== MyDatabaseFunction ====');
const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.addUser({ name: 'Romário', age: 56 });
myDatabaseFunction.addUser({ name: 'Bebeto', age: 56 });
myDatabaseFunction.showUsers();

console.log(myDatabaseFunction === myDatabaseFunctionFromModuleA);
