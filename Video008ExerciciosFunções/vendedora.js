function calcularPagamento() {
    let valorVenda = Number (document.getElementById("inValorDaVenda").value);
    let entrada = valorVenda/2;
    let valorParcela = entrada/3;

    document.getElementById("resposta").innerHTML=" Valor da entrada: R$ " + 
    entrada + " e três parcelas de: R$ " + valorParcela.toFixed(2) ;  


    document.getElementById("inValorDaVenda").value = "";

    
}