function CalcularMedia() {

    let nota001 = Number(document.getElementById ("Nota001").value);
    let nota002 = Number(document.getElementById ("Nota002").value);

    let media = (nota001 + nota002) / 2 ;

    if (media>=7) {
        document.getElementById("resposta").innerHTML = ("Média encontrada: " + media + ' |APROVADO| ' )
    } else {
        document.getElementById("resposta").innerHTML = ("Média encontrada: " + media + ' |REPROVADO|' )
    }

    document.getElementById("inNumero").value =""; 
}