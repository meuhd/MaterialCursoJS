function somarIdade (){
  
  let soma=0;
  for (i=1; i<=10; i++){
    let idade = Number (prompt('Informe a idade: '));
    soma= soma + idade; 
  }

  document.getElementById("resposta").innerHTML = "Soma total: "+ soma; 


    
}