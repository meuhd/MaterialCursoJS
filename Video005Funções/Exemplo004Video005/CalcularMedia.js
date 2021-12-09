function obterPrimeiraNota() {
    let primeiraNota =  Number((document.getElementById("inPrimeiraNota")).value);
    return primeiraNota; 
   
}

function obterSegundaNota (){
    let segundaNota =  Number((document.getElementById("inSegundaNota")).value);
    return segundaNota; 
}

function calcularMedia () {

    let media=(obterPrimeiraNota()+obterSegundaNota())/2; 
    return media ; 
  
}

function mostrarResultado(){
    document.getElementById("resposta").innerHTML= ("Média encontrada: " + calcularMedia()); 
}

function limparCampos (){
    document.getElementById("inPrimeiraNota").value ="";
    document.getElementById("inSegundaNota").value ="";
}


function apresentarMedia () {
    mostrarResultado();
    limparCampos();
 }


