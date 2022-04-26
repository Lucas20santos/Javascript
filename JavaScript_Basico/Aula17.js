// Bind

/*
    O método bind() cria uma nova função que, quando chamada, tem sua palavvra-chave this definida com o valor fornecido, 
    com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova funçao é
    chamada.
*/

function thisBindExemplo()
{
    console.log(this);
}

const obj = {exemplo: 'exemplo'}

thisBindExemplo = thisBindExemplo.bind(obj)

thisBindExemplo()

/*
* Nota: call() e apply() tem uma sintaxe identica. A diferença é que call() recebe uma lista como argumentos e
* apply() recebe um array como argumento.

*/
// Apply
 

// call

/*
* O método call() chama uma função com um dado 'this' e argumentos passados individualmente.
* O call() permite que uma função/método, pertencente a um dado objeto, seja atribuido e chamado por um objteo diferente.
*/

const obj1 = {exemplo1: 'exemplo1', mostraThis: function thisCallExemplo(){
    console.log(this);
}}

obj1.mostraThis()

const obj2 = {exemplo2: 'exemplo2'}

obj1.mostraThis.call(obj2);
obj1.mostraThis.apply(obj2);
