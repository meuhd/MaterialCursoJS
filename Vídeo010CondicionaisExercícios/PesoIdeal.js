function pesoIdeal() {
  let peso = Number(document.getElementById("inPeso").value);
  let altura = Number (document.getElementById("inAltura").value);

  let IMC = peso / Math.pow(altura,altura);




  if (IMC < 17.0 )
    document.getElementById("resposta").innerHTML = "Seu IMC é: "+  IMC.toFixed(2) + " / "+"Muito abaixo do peso"
  else if (IMC > 17.0 && IMC < 18.49)
    document.getElementById("resposta").innerHTML = "Seu IMC é: " + IMC.toFixed(2)  + " / "+"Abaixo do peso "
  else if (IMC > 18.50  && IMC < 24.99)
    document.getElementById("resposta").innerHTML = "Seu IMC é: " + IMC.toFixed(2)  + " / "+"Peso Normal "
  else if (IMC > 25.0  && IMC < 29.99)
    document.getElementById("resposta").innerHTML = "Seu IMC é: " + IMC.toFixed(2)  + " / "+"Acima do peso"
  else if (IMC > 30.0 &&  IMC <34.99) 
    document.getElementById("resposta").innerHTML = "Seu IMC é: " +IMC.toFixed(2)  + " / "+"Obesidade I"
  else if(IMC > 35.0 && IMC <39.99) 
    document.getElementById("resposta").innerHTML = "Seu IMC é: " +IMC.toFixed(2)  + " / "+"Obesidade II (Severa)"
  else if(IMC > 40.0) 
    document.getElementById("resposta").innerHTML = "Seu IMC é: " +IMC.toFixed(2)  + " / "+"Obesidade III (Mórbida)"
  else 
    document.getElementById("resposta").innerHTML = "Valor inválido!!!"

 

  document.getElementById("inPeso").value ="";
  document.getElementById("inAltura").value ="";




}
