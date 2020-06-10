/**
 *
 * @param {*} keyStr
 * @param {*} max
 */
export function hashFunc(keyStr, max) {
    // 1. 定义hashCode
    let hashCode = 0
    for (let i = 0; i < keyStr.length; i++) {
        hashCode = 31 * hashCode + keyStr.charCodeAt(i)
    }
    hashCode =  hashCode % max
    return hashCode
}


export class HashTable{
    constructor() {
        // 存储元素
        this.storage = []
        // 记录存储了多少元素
        this.count = 0
        // 长度
        this.limit = 8

    }
    // 放入元素
    put(key, value) {
        // 获取key映射的index
        const index = this.hashFunc(key, this.limit)
        // 判断当前位置是否有值
        let bucket  = this.storage[index]
        if(bucket === undefined) {
            bucket = []
            this.storage[index] = bucket
        }
        // 判断当前是插入还是修改操作
        let overide = false
        for(let i =0 ; i < bucket.length; i++) {
            let touple = bucket[i]
            if(touple[0] === key) {
                touple[1] = value
                overide = true
            }
        }
        // 新增
        if(!overide) {
            bucket.push([key, value])
            this.count++
            if(this.count <= this.limit * 0.75) return
            this.resize(this.limit * 2)
        }
    }
    // 哈希函数
    hashFunc(keyStr, max) {
        // 1. 定义hashCode
        let hashCode = 0
        for (let i = 0; i < keyStr.length; i++) {
            hashCode = 31 * hashCode + keyStr.charCodeAt(i)
        }
        hashCode =  hashCode % max
        return hashCode
    }
    // 获取数据
    get(key) {
        const index = this.hashFunc(key, this.limit)
        const bucket = this.storage[index]
        if(bucket === undefined) {
            return undefined
        }
        const findData = bucket.find(item => key === item[0])
        return findData ? findData[1] : undefined
    }

    remove(key) {
        const index = this.hashFunc(key, this.limit)
        const bucket = this.storage[index]
        if(bucket === undefined) return null
        const findIndex = bucket.findIndex(item => item[0] === key)
        if(findIndex === -1) return null
        const findData = bucket[findIndex]
        bucket.splice(findIndex, 1)
        this.count--
        return findData[1]
    }
    isEmpty() {
        return this.count === 0
    }
    size() {
        return this.count
    }

    resize(newLimit) {
        // 保存就数据
        const oldStorage = this.storage
        // 重置属性
        this.limit = newLimit
        this.storage = []
        this.count = 0

        // 取出oldStorage所有的数据
        oldStorage.forEach(bucket => {
            if(!item) return
            for(let i =0; i < bucket.length; i++) {
                this.put(bucket[0], bucket[1])
            }
        })
    }
}
