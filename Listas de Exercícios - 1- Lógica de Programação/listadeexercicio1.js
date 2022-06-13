/*1) Faça uma função que calcule e escreva a média aritmética dos números pares e inteiros entre 70 e 100. */

function mediaAritmetica(){
    let media = 70
    let cont = 0 
    let somaValores=0
    while (media < 100) {
     if (media % 2==0){
     somaValores += media
     cont +=1
    }
      media ++;
      console.log(somaValores,cont)
    }
  }
  mediaAritmetica()
  
  /*2) Faça uma função que escreva no console a mensagem Olá Mundo! 15 vezes. */
  
  function mensagem () {
    for (let mensagem1 = 0; mensagem1 <15; mensagem1++){
      console.log ("Olá Mundo!")
  }
  }
  mensagem ()
  
  
  /*3) Faça uma função que escreva no console os 6 primeiros números após o valor 88.*/
  
  function numAposOValor(){
    let num =88;
    while(num <94 ){
    num++;
      console.log (num)
  }
  }
  numAposOValor()
  