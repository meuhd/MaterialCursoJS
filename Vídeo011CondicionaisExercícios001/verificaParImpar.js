function verificarParImpar(){
  
   let numero = Number ( document.getElementById ("inNumero").value) ;

   if (numero % 2  == 0) 
      document.getElementById("resposta").innerHTML = "Número Par !!!";
   else
      document.getElementById("resposta").innerHTML = "Número Ímpar !!!";

   

}