export class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // append(value) adds a new node containing value to the end of the list
    append(value){
        let node = new Node(value)
        if(this.head == null){
            this.head = node;
        }else{
            this.tail(this.head).nextNode = node;
        }
        this.size++;
    }
    //prepend(value) adds a new node containing value to the start of the list
    prepend(value){
        let node = new Node(value)
        if(this.head == null){
            this.head = node;
        }else{
            node.value = value;
            node.nextNode = this.head;
            this.head = node;
        }
        this.size++;
    }
    //size returns the total number of nodes in the list
    getSize(){
        return this.size;
    }
    //head returns the first node in the list
    getHead(){
        return this.head;
    }
    //tail returns the last node in the list
    tail(node = null){
        if(node == null){
            node = this.getHead();
        }
        if(node.nextNode == null){
            return node;
        }
        return this.tail(node.nextNode);
    }
    //at(index) returns the node at the given index
    at(index){
        let node;

        return node;
    }
    //pop removes the last element from the list
    pop(node = null){
        if(node == null){
            node = this.getHead();
        }
        if(this.getSize() == 1){
            this.size = 0;
            return this.head = null;
        }else{
            if(node.nextNode.nextNode == null){
                this.size--;
                return node.nextNode = null;
            }
        }
        return this.pop(node.nextNode);
    }
    //contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains(value){

    }
    //find(value) returns the index of the node containing value, or null if not found.
    find(value){

    }
    //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString(node = null){
        if(node ==  null){
            node = this.head;
        }
        if(this.head == null){
            return "null";
        }
        if(node.nextNode == null){
            return `(${node.value}) -> null`;
        }
        return `(${node.value}) -> ` + this.toString(node.nextNode);
    }

    //insertAt(value, index) that inserts a new node with the provided value at the given index.
    inserAt(value, index){

    }
    //removeAt(index) that removes the node at the given index.
    removeAt(index){

    }
}

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}
