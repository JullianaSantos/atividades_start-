/*1) O cardápio de uma lanchonete é dado abaixo. Faça uma função que leia a quantidade de cada item que você consumiu e calcule e retorne a conta final. */

function valorConsumido(){
    let resultado = 3*quanthamburguer + 2.5*quantcheeseburger + 2.5*quantfritas + 1*quantrefrigerante + 3*quantmilkshake 
    
    console.log("O valor da sua conta final é", +resultado, "reais")
  } 

let quanthamburguer = parseInt(prompt("Digite a quantidade de hamburguer consumido:"))
let quantcheeseburger= parseInt(prompt("Digite a quantidade de cheeseburguer consumido:"))
let quantfritas= parseInt(prompt("Digite a quantidade de fritas consumido:"))
let quantrefrigerante= parseInt(prompt("Digite a quantidade de refrigerante consumido:"))
let quantmilkshake = parseInt(prompt("Digite a quantidade de milkshake consumido:"))

valorConsumido()


/*2) Faça uma função que retorne a frase:  Olá, que você tenha um dia muito bom! aaa */

function retornarFrase(){
  for (let frase = 0; frase <1; frase++)
    console.log("Olá, que você tenha um dia muito bom! aaa")
}

retornarFrase() 

/*3) Faça uma função que receba uma quantidade de chuva dada em polegadas e imprima o equivalente em milímetros (25,4 mm = 1 polegada).*/


function quantidadeChuva(receberpolegadas){
  let converter= receberpolegadas*25.4
  console.log("A quantidade de chuva desde mês foi de:", +converter, "milímetros")
}
let receberpolegadas=prompt("Digite a quantidade de chuva deste mês em polegadas:")
quantidadeChuva(receberpolegadas)


