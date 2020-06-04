class Node {
	constructor(ele) {
		this.ele = ele
		this.next = null
		this.prev = null
	}
}
export class DoublyLinkedList {
	constructor() {
		this.length = 0
		this.head = null
		this.tail = null
	}
	append(ele) {
		let node = new Node(ele)
		if (this.head === null) {
			this.head = node
		} else {
			let current = this.head,
				previous
			while (current) {
				previous = current
				current = current.next
			}
			previous.next = node
			node.prev = previous
		}
		this.tail = node
		this.length++
		return true
	}
	insert(position, ele) {
		// 检查越界
		if (position < 0 || position > this.length) {
			return false
		} else {
			let node = new Node(ele),
				current = this.head,
				index = 0,
				previous
			if (position === 0) {
				if (this.head === null) {
					this.head = node
					this.tail = noe
				} else {
					node.next = current
					current.prev = node
					this.head = node
				}
			} else if (position === this.length) {
				current = this.tail
				current.next = node
				node.prev = current
				this.tail = node
			} else {
				while (index++ < position) {
					previous = current
					current = current.next
				}
				node.next = current
				previous.next = node
				current.prev = node
				node.prev = previous
			}
			this.length++
			return true
		}
	}

	removeAt(position) {
		// 检查越界
		if (position < 0 || position >= this.length) {
			return false
		} else {
			let current = this.head,
				previous,
				index = 0
			if (position === 0) {
				this.head = current.next
				if (this.length === 1) {
					this.tail = null
				} else {
					this.head.prev = null
				}
			} else if (position === this.length - 1) {
				current = this.tail
				this.tail = current.prev
				this.tail.next = null
			} else {
				while (i++ < position) {
					previous = current
					current = current.next
				}
				previous.next = current.next
				current.next.prev = previous
			}
			this.length--
			return current.ele
		}
	}
}
