function gerarTabuada (){
  let numero = Number(document.getElementById("inNumero").value);


  document.getElementById("resposta").innerHTML = "Tabuada" + '\n'; 

  for (i=1; i<=10; i++){
    document.getElementById("resposta").innerHTML = document.getElementById("resposta").innerHTML  + " "+ numero + "x"+ i + "=" + numero*i  + '\n'; 
  }
    
}