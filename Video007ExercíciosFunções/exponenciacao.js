function calcularExponenciacao (){
    let numero001 = Number (document.getElementById('inNumero001').value);
    let numero002 = Number (document.getElementById('inNumero002').value);

    let exponeciacao = Math.pow (numero001,numero002); 
    document.getElementById("resposta").innerHTML=("Resultado: " + exponeciacao);

    document.getElementById("inNumero001").value =""; 
    document.getElementById("inNumero002").value =""; 
 


}

