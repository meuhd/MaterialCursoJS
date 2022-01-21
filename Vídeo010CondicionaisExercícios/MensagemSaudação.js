function mostrarMsg (){
   let turno = document.getElementById("inTurno").value;

   if (turno == 'M') 
        document.getElementById("resposta").innerHTML= "Bom dia !!"
     else if  (turno == 'V')
        document.getElementById("resposta").innerHTML= "Boa tarde !!"
     else if (turno == 'N')
        document.getElementById("resposta").innerHTML= "Boa Noite !!"
     else {
          document.getElementById("resposta").innerHTML= "Entrada Inválida"
     }
    
     document.getElementById("inTurno").value =""; 
}