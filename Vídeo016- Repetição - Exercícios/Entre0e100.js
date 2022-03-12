function calcular0e100 (){
  let soma=0;
  for (i=1; i<=10; i++){
    let numero = Number (prompt('Informe o número: '));

    if (numero>=0 && numero <=100 ) {
      soma ++;
    }
  
  }

  document.getElementById("resposta").innerHTML = "Quantidade de números entre 0 e 100 : "+ soma; 

    
}