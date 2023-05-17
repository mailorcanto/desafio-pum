
//Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.
//Entrada: A entrada contém um número inteiro N
//Saída: Imprime a saída conforme exemplo fornecido:
//Exemplo de saída para número '7' digitado:
//1 2 3 PUM
//5 6 7 PUM
//9 10 11 PUM
//13 14 15 PUM
//17 18 19 PUM
//21 22 23 PUM
//25 26 27 PUM

var n = 7;

for (i = 0; i < n; i++){
var n1 = i + 1 + (i * 4) - i;
var n2 = i + 2 + (i * 4) - i;
var n3 = i + 3 + (i * 4) - i;

console.log(`${n1} ${n2} ${n3} PUM`)
}