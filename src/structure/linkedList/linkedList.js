class Node {
	constructor(ele) {
		this.ele = ele
		this.next = null
	}
}
export class LinkedList {
	constructor() {
		this.head = null
		this.length = 0
	}
	append(ele) {
		const newNode = new Node(ele)
		// 处理跨界问题
		if (this.head === null) {
			this.head = newNode
		} else {
			let current = this.head
			while (current.next) {
				current = current.next
			}
			current.next = newNode
		}
		this.length++
	}
	insert(position, ele) {
		// 处理越界
		if (position < 0 || position > this.length) {
			return false
		} else {
			let newNode = new Node(ele)
			let index = 0,
				previous = null,
				current = this.head
			if (position === 0) {
				newNode.next = head
				head = newNode
			} else {
				while (index++ < position) {
					previous = current
					current = current.next
				}
				previous.next = newNode
				newNode.next = current
			}
			this.length++
			return true
		}
	}
	removeAt(position) {
		// 检查越界
		if (position < 0 || position > this.length - 1) {
			return null
		} else {
			let index = 0,
				previous,
				current = this.head
			if (position === 0) {
				head = current.next
			} else {
				while (index++ < position) {
					previous = current
					current = current.next
				}
				previous.next = current.next
			}
			this.length--
			return current.ele
		}
	}
	remove(ele) {
		let index = this.indexOf(ele)
		return this.removeAt(index)
	}
	indexOf(ele) {
		let current = this.head,
			index = 0
		while (current) {
			if (ele === current.ele) {
				return index
			}
			index++
			current = current.next
		}

		return -1
	}
	isEmpty() {
		return this.head === null
	}
	size() {
		return this.length
	}
}
