export class Queue {
	constructor() {
		this.items = []
	}
	// 向队列尾部添加一个（或多个）新的项
	enqueue(ele) {
		this.items.push(ele)
	}
	// 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
	dequeue() {
		return this.items.shift()
	}
	// 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不
	front() {
		if (this.isEmpty()) return null
		return this.items[0]
	}
	isEmpty() {
		return this.items.length === 0
	}
	size() {
		return this.items.length
	}
}

class QueueEle {
	constructor(ele, priority) {
		this.ele = ele
		this.priority = priority
	}
}
export class priorityQueue extends Queue {
	constructor() {
		super()
	}
	enqueue(ele, priority) {
		let queueEle = new QueueEle(ele, priority)
		let added = false
		for (let i = 0; i < this.items.length; i++) {
			if (queueEle.priority < this.items[i].priority) {
				this.items.splice(i, 0, queueEle)
				added = true
				break
			}
		}

		if (!added) {
			this.items.push(queueEle)
		}
	}
}

export function hotPotato(nameList, num) {
	// 创建队列
	const queue = new Queue()
	for (let i = 0; i < nameList.length; i++) {
		queue.enqueue(nameList[i])
	}

	while (queue.size() > 1) {
		for (let i = 0; i < num - 1; i++) {
			queue.enqueue(queue.dequeue())
		}
		queue.dequeue()
	}
	return queue.front()
}
