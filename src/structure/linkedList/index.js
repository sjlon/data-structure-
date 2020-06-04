import { LinkedList } from './linkedList'
import { DoublyLinkedList } from './doublyLinkedList'

const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)

console.log(linkedList.head)
linkedList.insert(1, 'a')
console.log(linkedList.head)
console.log(linkedList.indexOf('a'))

linkedList.remove('a')
console.log(linkedList.head)
console.log('============================')
const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.append('1')
doublyLinkedList.append('2')
doublyLinkedList.append('3')
doublyLinkedList.append('a')
console.log(doublyLinkedList.head, doublyLinkedList.length, doublyLinkedList.tail)
