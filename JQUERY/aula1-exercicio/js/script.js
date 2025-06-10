var a = 14;
var b = 24;
const soma = (x, y) => x + y;
var results = soma(a, b);
console.log(results);

/* outra maneira de fazer, porem não é possivel reutilizar, deve ser 
reescrito toda vez que necessario conta */
var x = 2;
var y = 5;
var resultado = x + y;
console.log(resultado);

// EXEMPLO RE-UTILZANDO A 1º OPÇÂO

console.log(soma(66, 90)); // IMPRIMIRÁ 156 NO CONSOLE, FAZENDO COM QUE A LINHA 3 SEJA RE-APROVEITADA.