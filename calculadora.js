var borrar = false;

function borrar(){
    var caja2 = document.f1.txtcaja2.value;
    if (caja2 == "" || caja2 == "0" || caja2.lenght == 1 && blocborrar!=true){
        document.f1.txtcaja2.value == "0";
    }
    else if(blocborrar!=true){
        var resp = caja2.substring(0,caja2.lenght-1);
        document.f1.txtcaja2.value = resp;
    }
}

function escribir(numero){
    var caja2 = document.f1.txtcaja2.value;

    if(borrar){
        document.f1.txtcaja2.value = "";
        borrar = false;
        document.f1.txtcaja2.value = numero;
    }
    else if(caja2 == "0" && numero != "."){
        cajaN = caja2.replace("0","")
        document.f1.txtcaja2.value = cajaN + numero;
    }
    else {
        document.f1.txtcaja2.value = caja2 + numero;
    }
}
