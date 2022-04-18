/*  Chamar o this diretamente no console nos traz o objeto global do contexto em que o JavaScript 

    O this no devtools do chrome nos traz o objeto window no Node nos tras o objeto global
    
*/

console.log(this)

console.log(this.window)
console.log(this.document)

// como o this funciona dentro de uma função


function thisNaoEstrito() {console.log(this)}

thisNaoEstrito()
