function calcularRaiz() {
    let numero = Number (document.getElementById("inNumero").value);
    let raizQuadrada = Math.sqrt(numero)
    document.getElementById("resposta").innerHTML=("Raiz quadrada : " + raizQuadrada)
    document.getElementById("inNumero").value =""; 

}