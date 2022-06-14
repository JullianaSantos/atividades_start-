/*1)Faça uma função que:
a) Receba 4 (quatro) números
b) Calcule o quadrado para cada um
c) Somem todos e
d) Mostre o resultado */


function somaDosNumeros(){
    let calcularQuadradoSoma= num1*num1 + num2*num2 + num3*num3 + num4*num4
      console.log ("A soma dos valores é:", +calcularQuadradoSoma)
  }
  
  let num1= prompt("Digite um número:")
  let num2= prompt ("Digite outro número:")
  let num3= prompt ("Por favor, digite mais um número:")
  let num4= prompt ("Só dessa vez, digite um número:")
  somaDosNumeros() 

  
  /*4)Construa uma função que receba um número.
a) Se positivo mostrar a informação de que ele é positivo.
b) Se for negativo, mostrar a informação de que ele é negativo. */

function receberNumero(numero){
    if (numero >0){
      console.log("Ihuuuuuuuuu, é um número posito")
    } else{
      console.log("Eita, é um número negativo")
    }
  }
  receberNumero(-5) 