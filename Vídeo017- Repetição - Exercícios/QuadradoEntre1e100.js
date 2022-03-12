function calcularQuadadoEntre1e100 (){


  document.getElementById("resposta").innerHTML = 'O quadrado de cada um dos números pares entre 1 e 100' + '\n'+'\n';

  for (i=1; i<=100; i++){
    
    if (i%2==0) {
      let quadrado = Math.pow(i,2);
      document.getElementById("resposta").innerHTML = document.getElementById("resposta").innerHTML  + i + "=" + quadrado+ '\n';
      
    }
  
  }





    
}