export class Stack {
	constructor() {
		this.items = []
	}
	push(ele) {
		this.items.push(ele)
	}
	pop() {
		return this.items.pop()
	}
	peek() {
		return this.items[this.items.length - 1]
	}
	isEmpty() {
		return this.items.length === 0
	}
	size() {
		return this.items.length
	}
	clear() {
		this.items = []
	}
}

export function dec2Bin(num) {
	const stack = new Stack()
	while (num > 0) {
		const remainder = num % 2
		num = Math.floor(num / 2)
		stack.push(remainder)
	}
	let binStr = ''
	while (!stack.isEmpty()) {
		binStr += stack.pop()
	}

	return binStr
}

export function baseConverter(num, base) {
	const stack = new Stack()
	let str = ''
	const digits = '0123456789ABCDEF'
	while (num > 0) {
		stack.push(num % base)
		num = Math.floor(num / base)
	}
	while (!stack.isEmpty()) {
		str += digits[stack.pop()]
	}
	return str
}
