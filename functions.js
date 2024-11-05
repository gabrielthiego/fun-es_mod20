function ola(param){
    return `Olá ${param}`
}
console.log(ola('mundo'));



(function ola(param){
console.log(param)
})('ola auto')


var ola = function ola(param){
   return `Olá ${param}`

}

console.log(ola('ola mundo 2'))


const dobro = (valor) => {
    return valor *2

}

console.log(dobro(5))


const dobro2 = valor => valor * 2
console.log(dobro(8))

let hello = () => console.log('hello')
hello()


let hello2 = _ => console.log('hello')
hello2()

const adiciona = (a, b, c) => a + b + c
console.log(adiciona(1,2,3))

const  multiplica = (a = 2, b = 3, c = 2) => a * b * c
console.log(multiplica())
console.log(multiplica(2,2,2))
console.log(multiplica(3,3,3))
console.log(multiplica(0))