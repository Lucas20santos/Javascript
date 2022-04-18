# Javascript

Javascript do básico ao avançado no canal do youtube
[https://www.youtube.com/watch?v=kGbbPBRFCE0&list=PL-R1FQNkywO4sD42B6OI6KjG3uOPT0aNl](Brazilian Dev)

## Site Recomendados para o estudo de Javascript

- [w3schools.com](https://www.w3schools.com)
- [MDS WEB DOCS](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web)

## Aulas Básicas

### Aula 01 - Introdução

### Aula 02 - como criar variáveis

- let
- const
- var

existe algumas regra na criação de nome de variáveis.

### Aula 03 - Tipos primitivos

- number
- string
- boolean
- undefined
- null
- Symbol -> criado com o ECS06

### Aula 04 - Tipo numerico e operações básicas

#### Operações

- Soma: 2 + 2 = 4

- Subtração: 2 - 2 = 0

- Multiplicação: 2 * 2 = 4

- Divisão: 2 / 2 = 1

- Resto: 2 % 2 = 0

- Retonar um valor inteiro: parseInt(11/2)

> "Wrapper Functions" nada mais sõa que funções construtoras. Ou seja, funções que constroem objetos.

#### Number Methods

- isFinite()
- isInteger()
- isNaN()
- isSafeInteger()
- toExponential(x)
- toFixed(x)
- toPrecision(x)
- toString()
- valueOf()

### Aula 05 - Tipo String

> Sequência de caracteres que estão entre aspas

#### Concatenação de string

> Juntar duas strings usando o operador "+".

#### Método length

> esse método conta a string e retorna um tipo primitivo numerico.

### Aula 06 - Tipo Boolean

> Basicamente é um tipo de dado que trabalha com 2 valores TRUE(verdadeiro) ou FALSE (falso).
> Temos basicamente 2 tipos de valores em JavaScript TRUTHY e FALSY.
> FALSY: false, null, undefined, 0, NaN.
> TRUTHY: todos os valores que não forem FALSY

#### Operadores Booleanos

- igualdade == retorna true se os valores forem iguais
- igualdade === retorna true se os valores e o tipo forem os mesmos.
- diferença != compara só valor
- diferente !== compara valor e tipo
- '>' maior que
- '<' menor que
- '>=' maior ou igual que
- '<=' maior ou igual que

### Aula 07 - Tipos null e undefined

### Aula 08.1 - Functions(parte 1)

#### Conceitos Iniciais

> Funções, em um contexto amplo, são blocos de código (ou subprogramas, e aidna subrotinas) estruturados que sempre retornam um valor.
> Procedimentos são um blocos de código estruturados também que não retorna um valor.
> No caso do JavaScript ainda que você não retorne nada a função irá retornar 'undefined'
> Você pode jogar funções para dentro de variável, como parâmetro.

### Aula 08.2 - Functions(parte 2)

#### Funções anonimas

#### Arrow Functions

### Aula 08.3 - Functions(parte 3)

#### Principal diferença entre null e undefined

> undefined é uma propriedade global ( em outras palavras variável ou key do objeto global) que tem como valor seu próprio nome. Deste mode temos que undefined tem valor undefined.
> Já null é um literal e não uma propriedade do objeto global. Para saber se um valor é null e não undefined, é bom sempre usar o operador de igauldade estrita (===).

### Aula 09 - Hoisting

> Em javascript, funções e variáveis são hoisted (ou 'levadas ao topo).
> Hoisting é um comportamento do JavaScript de mover declarações para o topo de um escopo (o escopo global ou da função em que se encontra).
> Inicializações não fazem parte do hoisting

### Aula 10.1 - Estrutura Condicionais (parte 1)

> if - else
> if - else if - else

### Aula 10.2 - Estrutura Condicionais (parte 2)

> conectivos && E e || OU
> operador ternários
> switch - case

### Aula 11.1 - Estrutura de Repetição (do.. while loop)

### Aula 10.1 - Estrutura de Repetição (while loop)

### Aula 10.1 - Estrutura de Repetição (for)

### Aula 12 - Objetos (Objects)

> Um objeto é uma coleção de dados relacionados e/ou funcionalidades (que geralmente consitem em diversas variáveis e funções - que são chamadas propriedades e métodos estão dentro de um objetos)
> Objetos podem ser inicializados usando new Object(), Object.create() ou usando a forma notação literal.

### Aula 13 - Arrays

> O objeto array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.
> Principias características de um Array em JavaScripts

- São objetos que tem, nativamente, diversos métodos embutidos para realizar diversos tipos de operação;
- São hetorogêneos (aceitam diversos tipos de dados dentro da mesma lista - inclusive outros arrays e objetos);
- Não tem tamanho fixo (o tamanho pode alterado a qualquer momento);
- Dados não saõ necessariamente armazenados contiguamente - podem ser densos (contíguos) ou esparsos (espaçado);
- Indices são acessado spor meio de números a partir do 0;
- Acessados o tamanho do array por meio da propriedade nativa "length".

### Aula - 14 Funções Construtora

### Aula - 15 Escopos (parte 1)

### Aula - 15 Escopos (parte 2)

> Quando você tenta imprimir uma variável, que está dentro de uma função, nesse exemplo a função mais interna recebe nível menor, neste caso 1; se dentro do contexto da função 1, essa variável não for declara, o javascript sai do contexto da função 1 e vai para um contexto superior ou o contexto de função 2. Caso ela não encontre o valor em nenhuma das funções, ela tenta encontrar no contexto global, que é o contexto máximo.

### Aula 16 - this em JavaScript

> Chamar o this diretamente no console nos traz o objeto global; dentro de um objeto, ele aponta para o objeto que ele foi chamado

### Aula 17 - call, apply e bind method

#### Bind()

> faz a palavra chave apontar para outro objeto

## Aulas avançadas

### Aula 00

> configuração e demotração dos sites de documentação que foi usado para gerar esse curso.

### Aula 01

- Não use var use let ou const
- escopo de variáveis
- let e const tem o mesmo escopo de bloco e var escopo de função

### Aula 02

- Arrow functions
