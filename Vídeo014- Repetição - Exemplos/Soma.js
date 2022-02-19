function somarNumeros (){

  let contador=0; 
  for (i = 1; i <=15; i++) {
    contador= contador +  i;
  }

  document.getElementById("resposta").innerHTML = "Resultado da soma: " + contador;  
    
}