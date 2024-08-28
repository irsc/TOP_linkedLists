import {LinkedList} from './linkedL';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.getSize());

list.prepend("prep monkey");

console.log(list.toString());
console.log(list.getSize());

list.pop();
list.pop();

console.log(list.toString());
console.log(list.getSize());