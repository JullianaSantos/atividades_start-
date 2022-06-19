/*1)O inverno é uma estação maravilhosa, não é? Aquele friozinho é bom demais. 
Faça uma função que represente as situações abaixo em que o humor das pessoas é definido 
de acordo com as tendências climáticas. Com base nas temperaturas dos últimos três dias, 
as pessoas podem estar tristes ou felizes. */



function humorPessoas(){

  let diaUm= parseInt(prompt("Digite a temperatura do dia um para identificarmos o seu humor:"))
  let diaDois= parseInt(prompt("Digite a temperatura do dia dois para identificarmos o seu humor::"))
  let diaTres=parseInt(prompt("Digite a temperatura do dia três para identificarmos o seu humor:"))
  
  
   if (diaUm < diaDois && ((diaDois > diaTres) || (diaTres == diaDois))){
      console.log(":)")
}
  
    else if( diaUm > diaDois && ((diaDois == diaTres) || (diaDois < diaTres))){
      console.log(":(")
}
  
    else if( diaUm > diaDois && diaDois > diaTres && (diaDois - diaUm) > (diaTres - diaDois)){
      console.log(":(")
}

    else if( diaUm > diaDois && diaDois > diaTres && (diaTres - diaDois) >= (diaDois - diaUm)){
      console.log(":)")
}

    else if( diaUm < diaDois && diaDois < diaTres && (diaUm - diaDois) > (diaDois - diaTres)){
      console.log(":)")
}
  
    else if( diaUm < diaDois && diaDois < diaTres && (diaUm - diaDois) <= (diaDois - diaTres)){
     console.log(":(")
}
  
    else if( diaUm == diaDois && diaDois < diaTres){
      console.log(":)")
}   

    else if( diaUm == diaDois && diaDois > diaTres){
      console.log(":(")
}
  
    else{
       console.log(":(")
}

}
humorPessoas()