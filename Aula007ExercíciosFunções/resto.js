function calcularResto(){
    let numero1 = Number (document.getElementById('inNumero001').value);
    let numero2 = Number (document.getElementById('inNumero002').value);

    let resto = numero1 % numero2;

    document.getElementById("resposta").innerHTML = "Resultado " + resto; 

    document.getElementById("inNumero001").value =""; 
    document.getElementById("inNumero002").value =""; 
    
}