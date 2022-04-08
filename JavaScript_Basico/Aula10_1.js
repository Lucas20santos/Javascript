/*
    se verdadeiro faça
        codigo
    caso contrario
        codigo
    fim se
*/

const fruta = "maça";
// só pra if else que só tem uma linha de código para mais codigo não funciona
if (fruta === 'maça') console.log('Fruta é igual a maça');
else console.log('Fruta não é igual a maça');

// é melhor usar dessa maneira pq todo o codigo entre chave é executado
if (fruta === 'maça') 
{
    console.log('Fruta é igual a maça');
}
else 
{
    console.log('Fruta não é igual a maça');
}

// 
const num = 1;

if(num === 1)
{
    console.log('igual a 1');
}
else if (num === 2)
{
    console.log('igual a dois');
}
else
{
    console.log('Diferente de 2 e 1');
}
