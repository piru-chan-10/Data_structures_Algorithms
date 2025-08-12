class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class linked_list {
    constructor(value) {
      this.head = new Node(value);
    }
    append(value) {
      let newNode = new Node(value);
  
      var temp = this.head;
      while (temp.next!==null) {
        temp = temp.next;
      }
      temp.next= newNode;
    }
    traverse() {
      var temp = this.head;
      while (temp!= null) {
        console.log(temp.value);
        temp = temp.next;
      }
    }
  }
  // this is the new 
  var link = new linked_list(1000);
  link.append(400);
  link.append(3003);
  link.append(30000)
  link.traverse();
  console.log(link.head)
  