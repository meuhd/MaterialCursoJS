function verificarIdade(){
  
   let ano = Number ( document.getElementById ("inNascimento").value) ;

   let idade = Number (2022-ano); 


   if (idade >= 18 )
      document.getElementById("resposta").innerHTML= "Você é ou se tornará maior de idade no presente ano !"
   else 
      document.getElementById("resposta").innerHTML= "Você é menor de idade e continuará sendo no presente ano!"




 
   

}