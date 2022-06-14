/*1) Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias. */

function receberIdade(){
    let calculoIdadeDias= mesNascimento*30 + anoNascimento*365 + diaNascimento
    console.log(calculoIdadeDias)
  }
  let diaNascimento= parseInt(prompt("Se seu aniversário fosse esse mês, quantos dias se passaram desde o seu aniversário?:"))
  let mesNascimento= parseInt(prompt("Digite quantos meses se passaram desde o seu aniversário: "))
  let anoNascimento= parseInt(prompt("Digite o ano do seu nascimento: " ))
  
  receberIdade() 
  
  
  /*2) Faça uma função que conte de 1 a 100 e a cada múltiplo de 7 escreva no console a mensagem: “Múltiplo de 7”. */
  
  function multiplos(){
    
    for (let mult = 1; mult<=100; mult++){
      
      if(mult%7==0){
        console.log("O número", +mult, "é múltiplo de 7")
    }
      }
  }
  multiplos() 
  
  
  /*3) Faça uma função que repita a palavra  arara 230 vezes. */
  
  function repetirPalavra(){
    for(let passaro=1; passaro<= 230; passaro++){
      console.log("Arara")
    }
  }
  repetirPalavra() 
  