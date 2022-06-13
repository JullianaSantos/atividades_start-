/*1) Faça uma função que exibe a sequência abaixo usando as especificações:
a) Exibir os 100 primeiros números da sequência da acima.
b) O primeiro valor é 0.
c) O segundo valor é 1.
d) O terceiro valor em diante é o resultado da soma de valores, por exemplo:
Se somar o primeiro valor e o segundo, o resultado é 1.
Se somar o segundo valor e o resultado da soma anterior,  o novo resultado será 2, e assim por diante. */
 

function sequencia(){
    let num= 100
    let valor1= 0
    let valor2= 1
    for(let cont=0; cont <=100; cont++){
      if(cont==1 || cont==2){
        console.log(1)
      } else{
        soma= valor1+valor2
        console.log(soma);
        valor1=valor2;
        valor2=soma;
    }
      }
    }
  sequencia()
  
  