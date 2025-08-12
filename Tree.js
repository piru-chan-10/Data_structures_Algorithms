class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(value) {
    this.root = new Node(value);
  }
  isEmpty() {
    return this.root.value === (null || undefined) ? true : false;
  }
  add_node(value) {
    let newNode = new Node(value);
    this.recurr_add(this.root, newNode);
  }
  recurr_add(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else this.recurr_add(root.left, newNode);
    }
    if (newNode.value > root.value) {
      if (root.right === null) {
        root.right = newNode;
      } 
    else this.recurr_add(root.right,newNode)
    }
  }
  traverse(root,value) {
    let temp=this.root;
    if(value<root.value){
        console.log(root.value);
        if(value===root.left.value){
            console.log(root.left.value);
            return;
        }
        else this.traverse(root.left,value)

    }
    if(value>root.value){
        console.log(root.value)
            if(value===root.left.value){
                console.log(value);
                return;
            }
            else this.traverse(root.right,value)
        }
    }

  }

let x = true;
let myTree = new Tree(20);
myTree.add_node(30);
myTree.add_node(10);
myTree.add_node(5)
myTree.add_node(50);
myTree.add_node(1);
console.log(myTree.root)
console.log(myTree.traverse(myTree.root,5));
// we can add some more functionality
// at first we should return
// at last er made a succesfull demonstration of Tree 
// further goal is to make inorder,preorder etc.