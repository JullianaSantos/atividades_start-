//Lista de Exercícios 1 

/*1)Faça uma função que:
a) Receba código da peça
b) Receba valor da peça
c) Receba Quantidade de peças
d) Calcule o valor total da peça (Quantidade * Valor da peça)
e) Escreva no console o código da peça e seu valor total. */

function totalValor(codigoPeca, valorPeca, quantidadePeca){
    let calculo = quantidadePeca*valorPeca
    
    console.log("O código da peça é:", +codigoPeca, "O valor total é:", +calculo)
    
  }
  var codigoPeca= prompt("Digite o código da peça:")
  
  var valorPeca= Number.parseInt(prompt("Digite o valor da peça:"))
  
  var quantidadePeca= prompt("Digite a quantidade de peças:")
  totalValor(codigoPeca, valorPeca, quantidadePeca)
  
  
  /*2)      Faça uma função para calcular o estoque médio de uma peça, sendo que ESTOQUEMÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2 */
  
   function calcularEstoqueMedio(quant1, quant2){
     let calcular= Number.parseInt(quant1 + quant2 /2)
     
     console.log ("O estoque médio de uma peça é: " + calcular)
   }
  
  calcularEstoqueMedio(10, 50)
  