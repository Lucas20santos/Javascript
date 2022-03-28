// Estrutura Inicial:
/*
function nomeDaFuncao(aqui entra os parâmetros que são variáveis... se tiver mais de uma variável separa por virgula)
{
    // codigo aqui
    
    // no final retorna explicitamente ou implicitamente
}
*/

let variavel = 'This string will be replaced by the return of the next function'

function funcReturnUndefined()
{
    let num1 = 10, num2 = 10, soma = num1 + num2;
    return soma;
}

variavel = funcReturnUndefined(); // retornará undefined
