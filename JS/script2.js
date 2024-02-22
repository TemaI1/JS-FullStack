class BinaryTreeNode {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
 
	setLeft(node) {
		if (this.left) {
			this.left.parent = null;
		}
		if (node) {
			this.left = node;
			this.left.parent = this;
		}
	}
 
	setRight(node) {
		if (this.right) {
			this.right.parent = null;
		}
		if (node) {
			this.right = node;
			this.right.parent = this;
		}
	}
}
 
// создание дерева
let aNode = new BinaryTreeNode(1);
let bNode = new BinaryTreeNode(2);
aNode.setLeft(bNode);
let cNode = new BinaryTreeNode(3);
aNode.setRight(cNode);
let dNode = new BinaryTreeNode(4);
bNode.setRight(dNode);
let eNode = new BinaryTreeNode(5);
cNode.setLeft(eNode);
let fNode = new BinaryTreeNode(6);
cNode.setRight(fNode);
 
// обход дерева, поиск в глубину
function traverseDFRecursive(node, callback) {
	// для самого узла
	callback(node);
	// для левого потомка
 
	if (node.left) {
		traverseDFRecursive(node.left, callback);
	}
	// для правого потомка
	if (node.right) {
		traverseDFRecursive(node.right, callback);
	}
}
 
function traverseDF(root, callback) {
	traverseDFRecursive(root, callback);
}
 
// перебор для дерева
traverseDF(aNode, node => console.log(node.value));
