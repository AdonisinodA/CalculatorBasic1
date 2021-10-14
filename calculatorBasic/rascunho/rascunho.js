



function soma() {

    var n1 = parseFloat(document.getElementById("n1").value);


    var n2 = parseFloat(document.getElementById("n2").value);


    let calculo = (n1 + n2);

    if (isNaN(calculo)) {
        alert("APENAS NÚMEROS")
    }

    result = document.getElementById('result').innerText = calculo

}

//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN


// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval

function subtração() {
    var n1 = parseFloat(document.getElementById("n1").value);


    var n2 = parseFloat(document.getElementById("n2").value);
    let calculo = (n1 - n2);

    result = document.getElementById('result').innerText = calculo



}


function multiplicacao(){
    var n1 = parseFloat(document.getElementById("n1").value);


    var n2 = parseFloat(document.getElementById("n2").value);
    let calculo = (n1 * n2);

    result = document.getElementById('result').innerText = calculo

}

function divisao(){
    var n1 = parseFloat(document.getElementById("n1").value);


    var n2 = parseFloat(document.getElementById("n2").value);
    let calculo = (n1 / n2);

    result = document.getElementById('result').innerText = calculo

}

// implementar calculos de investimento