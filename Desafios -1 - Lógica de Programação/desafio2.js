/*1)      Faça uma função que recebe um valor inteiro e positivo:
a)       Se o valor for menor que 350, a função deverá incrementar o valor recebido com o valor 5.
b)      Se o novo valor for múltiplo de 5, deverá exibir a mensagem: "MÚLTIPLO DE 5".
c)       Se o novo valor for múltiplo de 7, deverá exibir a mensagem: "MÚLTIPLO DE 7". */

function valorInteiroPositivo(receberValor){
  receberValor = parseInt(receberValor);
  if(receberValor < 350){
    receberValor+=5
    console.log (receberValor)
  }
  if(receberValor % 5==0){
    console.log("MÚLTIPLO DE 5")
  }
  if(receberValor % 7==0){
    console.log("MÚLTIPLO DE 7")
  }
}
let receberValor= prompt("Digite um número inteiro e positivo. Ex:10,25 etc.")
valorInteiroPositivo(receberValor)