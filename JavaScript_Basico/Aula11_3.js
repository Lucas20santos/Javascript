for (let i = 0; i < 5; i++)
{
    console.log(i);
}

let j = 0;
for( ; ; )
{
    if(j < 6) console.log(j);
    else break;
    j++;
}

// número impa entre 300 e 333
for(let i = 301; i <= 311; i += 2)
{
    console.log(i);
}

// são usados com objetos iteraveis
// for of
let arr = [3, 4, 5];

console.log("for-of: ");
for (const item in arr) // retorna as chaves 
{
    console.log(item); // logs "0", "1", "2"
}
// for in
console.log('for-in');
for (const item of arr) // retorna os valores
{
    console.log(item); // logs: "3", "4", "5"
}
