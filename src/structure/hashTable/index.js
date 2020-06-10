import { hashFunc,HashTable } from './hashTable'

// console.log(hashFunc('cat', 11))
// console.log(hashFunc('name', 11))

const hashTable = new HashTable()
hashTable.put('name', 'xiaohei')
hashTable.put('age', 111)
hashTable.put('height', '156kg')
hashTable.put('weight', '454')
console.log(hashTable.storage)

console.log(hashTable.get('age'))
console.log(hashTable.get('xxdfsd'))
console.log(hashTable.get('name'))

console.log(hashTable.get('weight'))
console.log(hashTable.remove('weight'))
console.log(hashTable.get('weight'))
