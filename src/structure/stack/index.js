import { Stack, dec2Bin, baseConverter } from './stack'

const stack = new Stack()
stack.push('1')
stack.push('2')
stack.push('3')
stack.push('4')
console.log(stack.items)
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.items)
console.log(stack.size())

console.log(baseConverter(10, 2))
console.log(baseConverter(10, 16))
console.log(baseConverter(1000, 2))
console.log(baseConverter(1000, 16))
