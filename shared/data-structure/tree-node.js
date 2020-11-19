class Node {
  constructor(data,left = null,right = null) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
  show() {
    return this.data;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  preOrder(node) {
    console.log(node)
    if (node !== null) {
      console.log(node.show());
      this.preOrder(node.left);
        //上一次递归已经把左边搞完了，右边
      this.preOrder(node.right);
    }
  }
  inOrder(node) {
    if (node !== null) {
        //上一次递归已经把左边搞完了，右边
      this.inOrder(node.left);
      console.log(node)
      console.log(node.show());
      this.inOrder(node.right);
    }

  }
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());

    }

  }
  recursiveInsert(node, current) {
    // 递归
    let parent = current;
    if (node.data < current.data) {
      current = current.left;
      if (current === null) {
        parent.left = node;
      } else {
        this.recursiveInsert(node, current);
      }
    } else {
      current = current.right;
      if (current === null) {
        parent.right = node;
      } else {
        this.recursiveInsert(node, current);
      }
    }
  }
  cycleInsert(node, current) {
    //循环
    let parent;

    while(true) {
      parent = current;
      if (node.data < current.data) {
        current = current.left;
        if (current === null) {
          parent.left = node;
          break;
        }
      } else {
        current = current.right;
        if (current === null) {
          parent.right = node;
          break;
        }
      }
    }
  }
  insert(value, isCycle = true) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      if (isCycle) {
        this.cycleInsert(node, this.root)

      } else {
        this.recursiveInsert(node, this.root)
    }
  }
}
}

const bst = new BST();
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(7);
bst.inOrder(bst.root)