function soma(num1, num2)
{
    const soma = num1 + num2;
    return soma
}

console.log(soma(1, 2))

const somaAnonima = function(num1, num2) 
{ 
    return num1 + num2 
}

console.log(somaAnonima(1, 4))

let arrowFSoma = (num1, num2) => num1 + num2;

console.log(arrowFSoma(1, 3))
