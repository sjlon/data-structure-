import { Queue, hotPotato } from './queue'

const queue = new Queue()
queue.enqueue('1')
queue.enqueue('2')
queue.enqueue('4')
queue.enqueue('3')
queue.enqueue('5')
console.log(queue.items)
console.log(queue.dequeue())
console.log(queue.items)
console.log(queue.size())
console.log(queue.front())
console.log(queue.items)

const nameList = ['a', 'b', 'c', 'd', 'e']
hotPotato(nameList, 3)
