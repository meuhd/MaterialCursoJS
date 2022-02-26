function maiorIdade (){


  let contMaioresDeIdade=0;
  for (i=1; i<=10; i++){
    let idade = Number (prompt('Informe a idade: '));
    if (idade>=18){
      contMaioresDeIdade++;
    } 
  }

  document.getElementById("resposta").innerHTML = "Maior idade: "+ contMaioresDeIdade; 
}