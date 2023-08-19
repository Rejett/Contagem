function enviar(){
    var n1 = window.document.getElementById("inicio")
    var n2 = window.document.getElementById("fim")
    var n3 = window.document.getElementById("passo")
    var res = window.document.getElementById('resultado')
    var cont = 0

    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        window.alert("Por favor digite um valor valido!!")

    } else{
        res.innerHTML = "Contando: "
        var inicio = Number(n1.value)
        var fim = Number(n2.value)
        var passo = Number(n3.value)

        for(let c = inicio; c <= fim; c += passo)
        {
            res.innerHTML += `${c} > `
            cont += 1
        }
        if (cont - fim != 0 || c == fim){
            res.innerHTML += `&#x1F3C1`
        }

    }


}