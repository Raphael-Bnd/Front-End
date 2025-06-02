const separador = '----------------------'; // usado como separador para melhor leitura no console.
function alerta(texto) {
    alert(texto);
}

const alerta_teste = (texto) => {
    alert(texto);
}

// alerta('Texto para exibição da função!');

window.onload = () => {
    alert('Página recarregada!');
}

window.addEventListener("load", function (event) {
    alert('Todos os recursos terminaram o carregamento!');
});

var tipovar = 'Primeira declaração TipoVar';
var condicional = 4;
console.log('tipoVar:' + tipovar);

if (condicional > 3) {
    var tipovar = "Segunda declaração TipoVar, dentro do if";
}

console.log('tipoVar:' + tipovar);

console.log(separador);

let tipoLet = 'Primeira declaração TipoLet';
let condicionalLet = 4;
console.log('tipoLet:' + tipoLet); //exibida primeiro

if (condicionalLet > 3) {
    let tipoLet = 'Segunda declaração TipoLet, dentro do if';
    console.log('tipoLet:' + tipoLet); // só é alterada dentro do if
}

console.log('tipoLet:' + tipoLet); // não é alterada pelo if, continua com o valor inicial

console.log(separador);

const tipoConst = 'Primeira declaração tipoConst'; // usada quando não tem valor alterado no código.
const condicionalConst = 4;
console.log('TipoConst:' + tipoConst);

if (condicionalConst > 3) {
    const tipoConst = 'Segunda declaração tipoConst, dentro do if';
    console.log('TipoConst:' + tipoConst); //só altera dentro do bloco
}

console.log('TipoConst:' + tipoConst); // não é alterada pelo if, continua com o valor inicial

console.log(separador);

var segundoVar = 'Declaração e atribuição inicial da segundoVar';
var segundoVar = 'segunda declaração e atribuição da segundoVar';
console.log('segundoVar:' + segundoVar);
segundoVar = 'Terceira atribuição da segundoVar:';
console.log('segundoVar:' + segundoVar);

console.log(separador);

let segundoLet = 'Declaração e atribuição inicial da segundoLet';
// let segundoLet = 'Segunda declaração e atribuição da segundoLet'; //ERRO POR DECLARAR NOVAMENTE
console.log('segundoLet:' + segundoLet);
segundoLet = 'Terceira atribuição da segundoLet'; //PODE SER REATRIBUIDO
console.log('segundoLet:' + segundoLet);

console.log(separador);

const segundoConst = 'Declaração e atribuição inicial da segundoConst';
// const segundoConst = 'Segunda declaração e atribuição da segundoConst'; // ERRO POR DECLARAR NOVAMENTE
console.log('segundoConst:' + segundoConst);
// segundoConst = 'Terceira atribuição da segundoConst';  // ERRO POR TENTAR REATRIBUIR UMA CONSTANTE
