// Funções anonimas
let anonimaF = function()
{
    return "Sou o retorno da função"
}

console.log(anonimaF)
console.log(anonimaF())

// Arrow Functions
let arrowF = () => "Sou o retorno na Arrow Functions"
console.log(arrowF)

// IIFE
let retornoDaIIFE = (function(){
    return "Sou o retorno de uma funçao imediata(IIFE)"
})()

console.log(retornoDaIIFE)

let soma = (function(a, b){
    return a + b
})(1, 2)

console.log(soma)
