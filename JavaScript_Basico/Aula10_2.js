// conectivos && e || (E e OU) 

const num1 = 10, num2 = 20;

if((num1 === 10) (num2 === 20))
{
    console.log('Expressão if foi suprida com valor verdadeiro');
}
else
{
    console.log('Expressão if foi suprida com valor falso.');
}

const string1 = "Java", string2 = "Script";

if((string1 === "Java") || (string2 || 'JavaScript'))
{
    console.log('Expressão Verdadeira');
}
else
{
    console.log('Expressão falsa');
}

// Operador ternário

let resultado = num1 > num2 ? "num1 é maior": "num2 é maior";

console.log(resultado);

const somaOuMultiplica = (valor) =>
{
    return valor >= 10 ? valor + valor: valor * valor;
}

console.log('Menores que 10');
console.log(somaOuMultiplica(1));
console.log(somaOuMultiplica(2));
console.log(somaOuMultiplica(3));
console.log(somaOuMultiplica(4));
console.log(somaOuMultiplica(10));
console.log(somaOuMultiplica(11));
console.log(somaOuMultiplica(12));
console.log(somaOuMultiplica(13));
console.log(somaOuMultiplica(14));

// switch - case

const item = 1;

switch (item) {
    case 1:
        console.log("Item 1 - Setor 1");
        break;
    case 2:
        console.log("Item 2 - Setor 2");
        break;
    case 3:
        console.log("Item 3 - Setor 3 ");
        break;
    case 4:
        console.log("Item 4 - Setor 4 ");
        break;
    case 5:
        console.log("Item 5 - Setor 5");
        break;
    case 6:
        console.log("Item 6 - Setor 6");
        break;
    case 7:
        console.log("Item 7 - Setor 7 ");
        break;
    case 8:
        console.log("Item 8 - Setor 8 ");
        break;
    
    default:
        console.log("Item 5 - Setor não existe");
}

