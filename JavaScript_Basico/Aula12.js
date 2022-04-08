// inicialização de um objeto

const obj1 = {
    prop1: "propriedade 1",
    metodo: (a, b) => {
        return a + b;
    }
}

// acesso de um objeto
// dot notacion
console.log(obj1.prop1);   // propriedade 1
console.log(obj1.metodo(2, 3));  // 5 retorno da função

// inserindo novas propriedades no objeto

obj1.OBJ = {propriedade1: "34"}
console.log(obj1);

// quando vc tem uma função dentro de um objeto,
// a propriedade passa a ser um método
