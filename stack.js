
// implementing a stack
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
// a simple stack
class stack{
    constructor(value){
        this.top=new Node(value)
        this.first=this.top;
    }
    add(value){
        let newTop=new Node(value);
        let temp=this.first;
        while(temp.next!==null){
            temp=temp.next;
        }
        temp.next=newTop;
        this.top=newTop;
    }
    delete(value){
        let temp=this.first;
        while(temp.next.value!==value){
            temp=temp.next;
        }
        temp.next=temp.next.next;
    }
    traverse(){
        let temp=this.first;
        while(temp!==null){
            console.log(temp.value)
            temp=temp.next;
        }
        console.log(this.top)
    }
}
let myStack=new stack(200)
myStack.add(3030)
myStack.add(343234)
myStack.traverse();
myStack.delete(3030);
myStack.traverse();
// we can also add algorithms such as deletion
