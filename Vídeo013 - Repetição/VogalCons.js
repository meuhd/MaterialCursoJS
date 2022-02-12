function verificarVogalCons (){
    let letra = document.getElementById("inLetra").value;
 
   

    if (letra=='a' || letra=='e' ||letra=='i' ||letra=='o' ||letra=='u' ) {
        document.getElementById("resposta").innerHTML = "Vogal!"
    }   
    else {
        document.getElementById("resposta").innerHTML = "Consoante!"  
    }


  document.getElementById("inLetra").value =""; 
    
    
}