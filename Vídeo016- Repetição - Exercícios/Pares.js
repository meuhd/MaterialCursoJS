function calcularQtdPares (){

  let soma=0;
  for (i=1; i<=10; i++){
    let numero = Number (prompt('Informe o número: '));

    if (numero%2==0) {
      soma ++;
    }
  
  }

  document.getElementById("resposta").innerHTML = "Quantidade de pares : "+ soma; 


}