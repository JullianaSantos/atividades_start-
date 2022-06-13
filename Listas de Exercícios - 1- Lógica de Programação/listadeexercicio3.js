/*1)Faça uma função que recebe 2 valores:

a)Se o primeiro valor for zero, imprimir no console o texto "Valor Inválido!".
b)Se o primeiro valor não for zero, obter o resto da divisão do primeiro valor pelo segundo e escrever no console o resultado. */

function receberDoisValores(valor1, valor2) {
    var resultado = valor1 % valor2;
    if (valor1 == 0) {
      console.log("Valor inválido!");
    } else {
      console.log("O resultado é: " + resultado);
    }
  }
  let valor1 = prompt("Digite um número: ");
  let valor2 = prompt("Digite outro número: ");
  receberDoisValores(valor1, valor2);
  
  /*2) Faça uma função que escreva no console 10 primeiros números inteiros maiores que 100. */
  
  function numerosInteiros(){
    for(let numeros =101; numeros <=110; numeros++){
      console.log(numeros)
    }
  }
  numerosInteiros()
  
  /*3) Faça uma função que gera e escreve os números ímpares entre 100 e 200 */
  
  function numerosImpares(){
    let numI = 100
    while (numI <=200) {
    let resto = numI%2==0;
    if (resto ==0){
     console.log(numI)
    }
      numI= numI+1
    }
  } 
  numerosImpares()
    
    
    