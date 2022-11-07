// npm i -g typescript
// tsc --init (to generate the tsconfig.json)
// tsc (to generate js file compiled)
// tsc -w (to watch automatically)

// string, boolean, number ...
const x: number = 10
const s: string = 'Catatau'
console.log(x)

        // 1. inferencia x annotation
    // 1.1 - inferencia -> tipagem implicita
let y = 12
// y = 'Alô'

    // 1.2 - annotation
let z: number = 15

        // 2. tipos básicos
let firstName: string = 'Matheus'
let age: number = 30
const isAdmin: boolean = true
// String != string

    // 2.1 - object, array, tuplas
const myNumbers: number[] = [25, 65, 82, 2]

let myTuple: [number, string, string[]]
myTuple = [5, 'Teste', ['Oi', 'Ola']]
// myTuple = [true, 7, 'Oi']

    // 2.2 - object literals -> {prop: value}
const user: { name: string, age: number} = {
    name: 'Pedro',
    age: 18
}

    // 2.3 - Any (Má pratica !!!)
let a: any = 'Oi'
a = 1
a = false

    // 2.4 - union type
let id: string | number = '10'
id = 200
// id = true

        // IMPORTANTES !!
    // 2.5 - type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = '0001'

    // 2.6 - enum
// tamanho de roupas (size: medio, size: grande)
enum Size {
    P = 'Pequeno',
    M = 'Medio',
    G = 'Grande'
}

const camisa = {
    name: 'Camisa gola V',
    size: Size.G
}

    // 2.7 - literal types
let teste: 'algum valor' | null
// teste = 'outrovalor'
teste = 'algum valor'
teste = null

        // 3. funções
    // 3.1 - Tipando Parametros
function sum(a: number, b: number) {
    return a + b
}
    // 3.2 - Tipando retorno
function sayHelloTo(name: string): string {
    // return true
    return `Hello ${name}`
}
    // 3.3 - Sem retorno
function logger(msg: string): void {
    console.log(msg)
}
    // 3.4 - Opcionais
function greeting(name: string, greet?: string) {
    if(greet) {
        console.log(`Olá ${greet}, ${name}`)
        return
    }
    console.log(`Olá ${name}`)
}

        // 4. interfaces
    // 4.1 - Definindo interface
interface MathFunctionParams {
    n1: number
    n2: number
}

function sumNumber(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}
console.log(sumNumber({ n1: 2, n2: 4 }))

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}
console.log(multiplyNumbers({ n1: 5, n2: 8 }))

    // 4.2 - Definindo valores
const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}
console.log(multiplyNumbers(someNumbers))

        // 5. narrowing
    // 5.1 - checagem de tipos
function doSomething(info: number | boolean) {
    if(typeof info === 'number') {
        console.log(`O número é ${info}`)
        return
    }
    console.log('Não foi passado um número!')
}

        // 6. generics
function showArrayItems<T>(arr: T[]){
    arr.forEach(item => {
        console.log(`ITEM ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ['a', 'b', 'c']
showArrayItems(a1)
showArrayItems(a2)

        // 7. classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean) {
        if(canShow) {
            console.log(`Idade do usuário é: ${this.role}`)
            return
        }
        console.log('Informação restrita!')
    }
}

const zeca = new User('Zeca', 'Admin', true)
console.log(zeca)
zeca.showUserName()
zeca.showUserRole(false)

        // 8. interfaces em classes
interface Ivehicle {
    brand: string
    showBrand(): void
}

class Car implements Ivehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }
    
    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}
const fusca = new Car('VW', 4)
fusca.showBrand()

        // 9. herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}
const a4 = new SuperCar('Audi', 4, 2.0)
console.log(a4)
a4.showBrand()

        // 10. decorators
    // 10.1 - constructor decorator
function BaseParamters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParamters()

class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}
const sam = new Person('Sam')
console.log(sam)