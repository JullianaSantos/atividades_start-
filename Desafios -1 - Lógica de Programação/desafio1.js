/*1)Faça uma função que escreva no console uma palavra de acordo com a especificação abaixo:
a) Utiliza os valores de 1 a 299.
b) Para cada valor, se ele for múltiplo de 3, deverá exibir a palavra: VAMO.
c) Para cada valor, se ele for múltiplo de 5, deverá exibir a palavra: BORA.
d) Para cada valor, se ele for múltiplo de 3 e 5 ao mesmo tempo, deverá exibir a palavra: VAMBORA. */


function multiplos() {
  
  for(let mult= 1; mult <= 299; mult++){
    
    if (mult % 3 ==0) {   
      console.log("VAMO")   
    }
    if(mult % 5 ==0){   
      console.log ("BORA")
    }
    if (mult % 3 == 0 && mult % 5 == 0) {    
       console.log("VAMOBORA")
  } 
    
  }
}
multiplos() 
