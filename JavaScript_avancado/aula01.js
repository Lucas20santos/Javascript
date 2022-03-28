let naoExposta = "Nao Exposta";
const naoExpostaConst = "Nao Exposta Const";

console.log(num)  // hoisting


if(true)
{
    var exposta = "exposta";
    let naoExposta = "naoExposta";
    const naoExpostaConst = "Nao exposta CONST";
}

console.log(exposta);  // não gera erro
console.log(naoExposta); // gera erro por causa do escopo em que foi declarado essa variáel

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

arr.pop();

console.log(arr)

const obj = {a: 1, b: 2};

obj.c = 3;

console.log(obj);

delete obj.c;

console.log(obj);


var num = 1;
