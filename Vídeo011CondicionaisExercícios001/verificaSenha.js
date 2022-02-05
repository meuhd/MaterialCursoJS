function verificarSenha(){
  
   let senha = Number ( document.getElementById ("inSenha").value) ;

   if (senha == 4321) 
      document.getElementById("resposta").innerHTML = "ACESSO PERMITIDO!!"
   else  
      document.getElementById("resposta").innerHTML = "ACESSO NEGADO!"


  

   

}