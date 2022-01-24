function mostrarMsg (){
   let numero = Number(document.getElementById("inNumero").value);

 

   if (numero == '1') 
        document.getElementById("resposta").innerHTML= "Domingo"
     else if (numero == '2')
        document.getElementById("resposta").innerHTML= "Segunda"
     else if (numero == '3')
        document.getElementById("resposta").innerHTML= "Terça-feira"
     else if (numero == '4') 
        document.getElementById("resposta").innerHTML= "Quarta-feira"
     else if  (numero == '5')
        document.getElementById("resposta").innerHTML= "Quinta-feira"
     else if  (numero == '6')
        document.getElementById("resposta").innerHTML= "Sexta-feira"
     else if (numero == '7')
        document.getElementById("resposta").innerHTML= "Sábado"
     else 
     document.getElementById("resposta").innerHTML= "Ops! Entrada inválida !"

  
        document.getElementById("inNumero").value =""; 

}