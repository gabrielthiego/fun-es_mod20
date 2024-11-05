let frutas = ['maçã','banana','limão'] // listar
console.log(frutas.length) // enumerar

let primeiraFruta = frutas[0] // mostrar primeira
console.log(primeiraFruta)

let ultimaFruta = frutas[frutas.length - 1] //mostrar ultima
console.log(ultimaFruta)

frutas.forEach((fruta) => {
     console.log(fruta)
})

frutas .pop() // deletar

frutas.push('Pera') // colocar


frutas.forEach((fruta) => {
    console.log(fruta)
})


var jsonJS = [
    {
       "nome": function(){
          return 'João'
       },
       "idade": "42"
    },
    {
       "nome": "Maria",
       "idade": 25
    }
]


console.log(jsonJS)
//console.log(jsonJS[0].nome())

const jsonRest = {
    "nome": " Daniel",
    "idade": 25
}

console.log(jsonRest)

console.log(JSON.stringify(jsonJS))// trafico de dados

const texto = '[{"idade":"42"},{"nome":"Maria","idade":25}]'
console.log(JSON.parse(texto)) // transforma em objeto novamente  desfazendo a linha anterior

