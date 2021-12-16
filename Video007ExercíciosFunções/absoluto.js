function calcularAbsoluto(){
    let numero = Number (document.getElementById('inNumero001').value);


    let absoluto = Math.abs(numero);

    document.getElementById("resposta").innerHTML = "Resultado " + absoluto; 

    document.getElementById("inNumero001").value =""; 
    
}