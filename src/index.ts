//basic types

let id: number = 5;
let comaponay: string = "DIRIE"
let isPublished: boolean = true;

let x:any = "hello"

let ids: number [] = [1,2,3, 4,5,6,7,8,9,10,11]
let arr: any[] = [1, true, 'hello']

//tuple
let person : [number, string, boolean] = [1, 'hello', false]


//tuple array
let emplyee : [number, string] []


emplyee = [
    [1, 'dirie'],
    [2, 'ali'],
]


//union
let paid: string | number


//enum

enum Direction1 {
    Up = 'up',
    Down='down',
    Left='left',
    Right='right'
}

// object

type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: "Dirie"
} 

//type assertion

let cid : any = 1
// let customerId = <number>cid
let customerId = cid as number

//function
function addNum(x:number, y:number): number{
    return x + y
}

let result = addNum(1,2)


function log(message:string | number): void{
    console.log(message)
}

//interface
interface UserInterface {
    readonly id: number,
    name: string,
    age?:number
}

const user1: UserInterface = {
    id: 1,
    name: "Dirie",
    age: 20
} 


interface MatrhFun {
    (x:number, y:number) : number
}


const add: MatrhFun = (x:number, y:number): number => x + y
const sub: MatrhFun = (x:number, y:number): number => x + y

//classes
class Person {
    // public private protected
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

}
const brad = new Person(1, "dirie")


//Genrics
function getArray<T>(items: T[]):T[]{
    return new Array().concat(items)
}

let numberArray = getArray([1, 2, 3])
let strArray = getArray(['wow', 'hi', 'world'])

numberArray.push(5)
strArray.push('we')

console.log(brad.id)

