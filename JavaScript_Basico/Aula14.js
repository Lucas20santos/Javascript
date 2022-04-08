// São funções usadas para construir objetos

// O exemplo abaixo é de uma função construtora de ventilador
function Ventilador(velMax)
{
    this.velocidadeMaxima = velMax;
    if(this.velocidadeMaxima != 0) this.ligado = true
    else this.ligado = false;
}

// Instâncias 

// Para criar uma instância de um objeto do tipo "Ventilador" usamos a palavra reservada "new" seguida da chamada da função

const vent1 = new Ventilador(30);
console.log(vent1.ligado);

// Diferente de outras linguagens orientadas a objetos, podemos adicionara propriedades e métodos em tempo de execução

vent1.cor = "branco"
console.log(vent1.cor);

vent1.ligaDesliga = function() 
{
    if(this.ligado)
    {
        this.ligado = false;
    }
    else
    {
        this.ligado = true;
    }
}

vent1.ligaDesliga()


Ventilador.prototype.ligado = true;

console.log(vent1);
