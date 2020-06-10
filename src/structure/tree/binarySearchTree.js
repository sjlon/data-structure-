export class Node {
	constructor(key) {
		this.key = key
		this.left = null
		this.right = null
	}
}
export class BinarySearchTree {
	constructor() {
		this.root = null
	}
	insert(key) {
		const node = new Node(key)
		if (this.root === null) {
			this.root = node
		} else {
			this.insertNode(this.root, node)
		}
	}
	insertNode(node, newNode) {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode
			} else {
				this.insertNode(node.left, newNode)
			}
		} else {
			if (node.right === null) {
				node.right = newNode
			} else {
				this.insertNode(node.right, newNode)
			}
		}
	}
	search(key) {
		return this.searchNode(this.root, key)
	}
	searchNode(node, key) {
		if (node === null) {
			return false
		}
		if (key < node.key) {
			return this.searchNode(node.left, key)
		} else if (key > node.key) {
			return this.searchNode(node.right, key)
		} else {
			return true
		}
	}
	inOrderTraverse(cb) {
		this.inOrderTraverseNode(this.root, cb)
	}
	inOrderTraverseNode(node, cb) {
		if (node === null) {
			return
		} else {
			this.inOrderTraverseNode(node.left, cb)
			cb(node.key)
			this.inOrderTraverseNode(node.right, cb)
		}
	}
	preOrderTraverse(cb) {
		this.preOrderTraverseNode(this.root, cb)
	}
	preOrderTraverseNode(node, cb) {
		if (node !== null) {
			cb(node.key)
			this.preOrderTraverseNode(node.left, cb)
			this.preOrderTraverseNode(node.right, cb)
		}
	}
	postOrderTraverse(cb) {
		this.postOrderTraverseNode(this.root, cb)
	}
	postOrderTraverseNode(node, cb) {
		if (node !== null) {
			this.postOrderTraverseNode(node.left, cb)
			this.postOrderTraverseNode(node.right, cb)
			cb(node.key)
		}
	}
	min() {
		return this.minNode(this.root)
	}
	minNode(node) {
		if (node) {
			while (node && node.left !== null) {
				node = node.left
			}
			return node.key
		}
		return null
	}
	max() {
		return this.maxNode(this.root)
	}
	maxNode(node) {
		if (node) {
			while (node && node.right !== null) {
				node = node.right
			}
			return node.key
		}
		return null
	}
	remove(key) {
		this.root = this.removeNode(this.root, key)
	}
	removeNode(node, key) {
		if (node === null) {
			return null
		}
		if (key < node.key) {
			node.left = this.removeNode(node.left, key)
			return node
		} else if (key > node.key) {
			node.right = this.removeNode(node.right, key)
		} else {
			// 叶子节点
			if (node.left === null && node.right === null) {
				node = null
				return node
			}
			// 只有一个子节点
			if (node.left === null) {
				node = node.right
				return node
			} else if ((node.right = null)) {
				node = node.left
				return node
			}
			// 有两个子节点
			const aux = this.findMinNode(node.right)
			node.key = aux.key
			node.right = this.removeNode(node.right, aux.key)
			return node
		}
	}
	findMinNode(node) {
		while (node && node.left !== null) {
			node = node.left
		}
		return node
	}
}
