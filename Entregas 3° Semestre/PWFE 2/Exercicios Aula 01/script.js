function bonus(){
    let salario = Number(document.getElementById('salario').value)
    let resultado = document.getElementById('resultado')
    let bonus = 0

    if(salario > 2000){
        bonus = salario * 0.10
    }

    let final = salario + bonus

    resultado.innerHTML =
        `Bônus R$ ${bonus.toFixed(2)} <br>Salário Final R$ ${final.toFixed(2)}`
}

function frete(){
    let valor = Number(document.getElementById('compra').value)
    let resultado = document.getElementById('resultado')
    let frete = 20

    if(valor >= 150){
        frete = 0
    }

    let total = valor + frete

    resultado.innerHTML =
        `Frete R$ ${frete.toFixed(2)} <br>Total R$ ${total.toFixed(2)}`
}

function combustivel(){
    let valor = Number(document.getElementById('valor').value)
    let resultado = document.getElementById('resultado')
    let desconto = 0

    if(valor > 200){
        desconto = valor * 0.05
    }

    let final = valor - desconto

    resultado.innerHTML =
        `Desconto R$ ${desconto.toFixed(2)} <br>Total R$ ${final.toFixed(2)}`
}

function taxa(){
    let conta = Number(document.getElementById('conta').value)
    let resultado = document.getElementById('resultado')
    let taxa = 0

    if(conta > 100){
        taxa = conta * 0.10
    }

    let total = conta + taxa

    resultado.innerHTML =
        `Taxa R$ ${taxa.toFixed(2)} <br>Total R$ ${total.toFixed(2)}`
}

function multa(){
    let valor = Number(document.getElementById('mensalidade').value)
    let dias = Number(document.getElementById('dias').value)
    let resultado = document.getElementById('resultado')
    let multa = 0

    if(dias > 0){
        multa = valor * 0.02
    }

    let total = valor + multa

    resultado.innerHTML =
        `Multa R$ ${multa.toFixed(2)} <br>Total R$ ${total.toFixed(2)}`
}

function cashback(){
    let valor = Number(document.getElementById('valor').value)
    let resultado = document.getElementById('resultado')
    let cashback = 0

    if(valor > 300){
        cashback = valor * 0.05
    }

    resultado.innerHTML =
        `Cashback R$ ${cashback.toFixed(2)} <br>Valor pago R$ ${valor.toFixed(2)}`
}
