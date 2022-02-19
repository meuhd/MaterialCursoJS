function gerarNomes (){

  let nome = document.getElementById("inNome").value;

  document.getElementById("resposta").innerHTML = nome; 


  for (i = 1; i < 10; i++) {
    document.getElementById("resposta").innerHTML = document.getElementById("resposta").innerHTML  + " "+ nome; 
  }

  
  document.getElementById("inLetra").value =""; 

    
}