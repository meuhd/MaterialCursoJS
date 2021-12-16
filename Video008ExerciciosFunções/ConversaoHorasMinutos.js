function converterParaHorasMinutos(){
    let nomeFilme =  document.getElementById("inNomeFilme").value;
    let duracao = Number (document.getElementById("inTempoFilme").value);

    let horas = Math.floor (duracao/60);
    
    let minutos = duracao%60; 

    document.getElementById("resposta").innerHTML = "O filme  " +nomeFilme+
    " tem duração em  horas / minutos : " + horas + ":"
     + minutos

     document.getElementById("inNomeFilme").value = "";
     document.getElementById("inTempoFilme").value = "";

}