// Outra situação é quando temos uma função dentro de outra.

let nivelGlobal = 'Nivel Global'
let nivel1 = 1, nivel2 = undefined, nivel3 = undefined;

function funcaoNivel1()
{
    let nivel1 = "Nível 1"
    function funcaoNivel2()
    {
        let nivel2 = "Nível 2"
        function funcaoNivel3()
        {
            let nivel3 = "Nível 3"
            console.log(`Nível 3: ${nivel3}`);
            console.log(nivelGlobal + "3");
        }
        funcaoNivel3()
        console.log(`Nível 2: ${nivel2}`);
    }
    funcaoNivel2();
    console.log(`Nível 1: ${nivel1}`)
}

funcaoNivel1();

console.log(nivel1);
console.log(nivel2);
console.log(nivel3);