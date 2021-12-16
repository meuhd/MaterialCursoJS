function calcularValorPao() {
    let precoKg = Number (document.getElementById("inValorPao").value);
    let qtdGramas = Number (document.getElementById("inValorGrama").value);

    let valorAPagar = (qtdGramas * precoKg) /1000;

    document.getElementById("resposta").innerHTML=" Valor do pagamento R$ " + valorAPagar ; 

    
    document.getElementById("inValorPao").value = "";
    document.getElementById("inValorGrama").value = "";


}