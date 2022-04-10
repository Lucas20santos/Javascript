// declarando variáveis

// Hoisting

// foo = 2
// console.log(foo);
// var foo;

// foo1 = 3;
// console.log(foo1)

// testando com o let e const
// foo2 = 4
// console.log(foo2)
// let foo2

// dar erro pq a variável precisa ser declara e inicializada
// foo3 = 4
// console.log(foo3)
// const foo3 = 0

// para evitar o hoisting é melhor declarar variáveis com let e const

// declaração de função

hoisted();

function hoisted (){
    console.log("foo");
}

// inicialização não faz parte do hoisting

var x = 10;
console.log(x, y);
var y = 1;

