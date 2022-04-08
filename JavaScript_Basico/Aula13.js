// criando um array de forma literal
let frutas1 = [];
// ou
let frutas2 = ['Maçã', 'Banana'];

console.log(frutas1.length);
console.log(frutas2.length);

// outra maneira seria usando o operador new constroi um novo objeto por meio da função construtora do array

let frutasUsandoNew = new Array('Maçã', 'Banana'); // declarando elementos como argumentos

let arrTamanho = new Array(10); // dando o númeor de posições como argumentos

console.log(frutasUsandoNew);

console.log(arrTamanho);
