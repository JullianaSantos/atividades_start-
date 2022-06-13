/*1) Faça uma função que recebe um valor inteiro e escreva a tabuada de subtração do valor recebido.*/

function receberValor(){
  
    for(var sub=1; sub<=10 ; sub++) {
       let subtracao = valor-sub;
       
       console.log (+valor, "-",+sub, "=",subtracao);
     } 
    }
    let valor= prompt("Digite um número inteiro. Ex:1,2,10: ")
    receberValor()
    
    
    
    /*2) Faça uma função que conte de 1 a 100 e a cada múltiplo de 10 escreva no console a mensagem: “Múltiplo de 10”. */
    
    
      function multiplosDez(){
        
      for(var mult = 1; mult <= 100; mult++){
        
         if(mult % 10 ==0){
           
           console.log ("O número", +mult, "é múltiplo de 10")
          
        }else{
      }
      }
    }
    multiplosDez()
    
    /*3) Uma rainha requisitou os serviços de um monge e disse-lhe que pagaria qualquer preço. O monge, necessitando de alimentos , indagou à rainha sobre o pagamento, se poderia ser feito com grãos de trigo dispostos em um tabuleiro de xadrez, de tal forma que o primeiro quadro deveria conter apenas um grão e os quadros subseqüentes , o dobro do quadro anterior. A rainha achou o trabalho barato e pediu que o serviço fosse executado, sem se dar conta de que seria impossível efetuar o pagamento. Faça uma função para calcular o número de grãos que o monge esperava receber. */

function numeroGraosRecebidos() {
    let contar = 0;
    let numeroGraos = 1;
    while (contar < 64) {
      contar++;
      numeroGraos = numeroGraos * 2;
    }
    console.log("O número de grãos que o monge esperava receber era de: " + numeroGraos);
  }
  numeroGraosRecebidos();
  
    