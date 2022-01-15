function crescente() {

    let nota001 = Number(document.getElementById ("numero001").value);
    let nota002 = Number(document.getElementById ("numero002").value);
    let nota003 = Number(document.getElementById ("numero003").value);



  

    let aux;

    if (nota001 > nota002)
    {
        aux=nota001;
        nota001=nota002;
        nota002=aux;

    }

    if (nota001>nota003){
        aux=nota001;
        nota001=nota003;
        nota003=aux;
    }

    if (nota002>nota003){
        aux=nota002;
        nota002=nota003;
        nota003=aux;

    }

    
    document.getElementById("resposta").innerHTML = ("Em ordem crescente: " + nota001 + " " + nota002 +" " + nota003 +" ");

 

   
}