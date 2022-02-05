function verificarClassificacao (){
    let pergunta001 = document.getElementById("inPergunda001").value;
    let pergunta002 = document.getElementById("inPergunda002").value;
    let pergunta003 = document.getElementById("inPergunda003").value;
    let pergunta004 = document.getElementById("inPergunda004").value;
    let pergunta005 = document.getElementById("inPergunda005").value;

    let contador=0

    if (pergunta001 == 'S')
        contador++;
    if (pergunta002 == 'S')
        contador++;
    if (pergunta003 == 'S')
        contador++;
    if (pergunta004 == 'S')
        contador++;
    if (pergunta005 == 'S')
        contador++;




    if (contador==2) {
        document.getElementById("resposta").innerHTML = "Suspeita!"
    } else if (contador==3 || contador==4) {
        document.getElementById("resposta").innerHTML = "Cúmplice!"  
    } else if (contador==5){
        document.getElementById("resposta").innerHTML = "Assassino!"  
    } else {
        document.getElementById("resposta").innerHTML = "Inocente!"  
    }

    document.getElementById("inPergunda001").value ="";
    document.getElementById("inPergunda002").value ="";
    document.getElementById("inPergunda003").value ="";
    document.getElementById("inPergunda004").value ="";
    document.getElementById("inPergunda005").value ="";

    
    
}