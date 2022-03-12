function calcularMaiorQue5 (){
  
  let soma=0;
  for (i=1; i<=10; i++){
    let numero = Number (prompt('Informe o número: '));

    if (numero >=5) {
      soma ++;
    }
  
  }

  document.getElementById("resposta").innerHTML = "Quantidade de números maiores que 5 : "+ soma; 


    
}