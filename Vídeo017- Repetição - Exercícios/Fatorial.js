function calcularFatorial() {

  

  let numero = Number(document.getElementById("inNumero").value);

  let contadorFatorial = 1; 

  for ( i=numero; i>1; i--){
    contadorFatorial = contadorFatorial *i; 
  }

  document.getElementById("resposta").innerHTML = 'Fatorial: ' + contadorFatorial; 


}


