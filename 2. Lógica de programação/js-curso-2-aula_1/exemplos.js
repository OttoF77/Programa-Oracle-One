//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log("Olá, mundo!");
}
olaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
}
olaNome("João");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero) {
    return numero * 2;
}
console.log(dobro(5));

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
console.log(media(5, 10, 15));

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(n1, n2) {
    return n1 > n2 ? n1 : n2;
}
console.log(maior(5, 10));

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(numero) {
    return numero * numero;
}
console.log(quadrado(5));