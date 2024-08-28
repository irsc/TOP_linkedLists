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
console.log(list.contains("turtle"));
console.log(list.find("turtle"));

list.prepend("prep monkey");

console.log(list.toString());
console.log(list.getSize());
console.log(list.getHead());
console.log(list.contains("turtle"));
console.log(list.find("turtle"));

list.pop();
list.pop();

console.log(list.toString());
console.log(list.getSize());
console.log(list.at(3));
console.log(list.at(88));
console.log(list.contains("turtle"));
console.log(list.find("turtle"));

list.insertAt("turtle", 3);
list.insertAt("super monkey", 0);

console.log(list.toString());
console.log(list.getSize());
console.log(list.at(3));
console.log(list.contains("turtle"));
console.log(list.find("turtle"));


list.removeAt(4);
list.removeAt(0);

console.log(list.toString());
console.log(list.getSize());
console.log(list.at(4));
console.log(list.contains("turtle"));
console.log(list.find("turtle"));