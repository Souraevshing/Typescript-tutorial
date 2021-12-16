console.log(`Hello TS :)`)

let age: number = 1
console.log(`Age is ${age}`)

let Name: string = 'saurav'
console.log(`Name is ${Name}`)

let a: any = "'any' is for any data types"
console.log(`any data type : ${a}`)

let array: number[] = [1, 2, 3]
console.log(`Array : ${array}`)

let tuple: [number, string, string, any, number] = [2, 'saurav', 'kr', 2, 2]
console.log(`Tuple : ${tuple}`)

let emp: [number, number[], string] = [1, [2, 3, 4], 'employee']
console.log(`Employee details : ${emp}`)

let union: string | number = 2000000
console.log(`Union : ${union}`)

enum e1 {
  Sun,
  Mon,
  Tue,
  Wed,
}
console.log(
  `Enums are : ${e1}Sun=${e1.Sun}\n
                    Mon=${e1.Mon}\n
                    Tue=${e1.Tue}\n
                    Wed=${e1.Wed}\n`
)

/**
 *Class-Objects
 **/
//type-setting
type User = {
  userId: number
  userName: string
}
const user: User = {
  userName: 'admin',
  userId: 2,
}
console.log(`Username is ${user.userName}`)
console.log(`Userid id ${user.userId}`)

//type-assertion
let id: any = 102
let uid = <any>id
id = 'a'

//function
function f(a: number, b: string): any {
  console.log(`in function f() with a=${a} b=${b}`)
}
f(20, 'function f()') //calling

//interface
interface i1 {
  name: string
  age: number
}
const Interface: i1 = {
  name: 'saurav',
  age: 22,
}
console.log('name is' + Interface.name)
console.log('age is' + Interface.age)

interface i2 {
  (j: number, k: number): number
}
const Add: i2 = (j: number, k: number): number => j + k
const Sub: i2 = (j: number, k: number): number => j - k
console.log(Add.call(this, 5, 10))
console.log(Add.call(this, 20, 10))

//super class
class A {
  id: number
  name: string
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}
const ob1 = new A(101, 'object1')
const ob2 = new A(102, 'object2')
console.log(`ob1 id : ${ob1.id} ob1 name : ${ob1.name}`)
console.log(`ob2 id : ${ob2.id} ob2 name : ${ob2.name}`)

//sub class
class B extends A {
  age: number
  constructor(id: number, name: string, age: number) {
    super(103, 'class B')
    this.age = age
    this.id = id
    this.name = name
  }
}
console.log(new B(104, 'kr', 2))

//generics
function generic<T>(item: T[]): T[] {
  return new Array().concat(item)
}
let ar1 = generic<number>([1, 2,])
let str1 = generic<string>(['sourav', 'KR'])
ar1.push(3)
console.log(ar1)
console.log(str1)
