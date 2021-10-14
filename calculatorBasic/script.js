
// CONSTRUIR HISTÓRICO && APAGAR DADOS QUANDO APERTAR EM CALCULAR = feito

// RETIRAR AS VIRGULAS DE RESIDUOS DA LISTA HISTORY QUANDO É REDERIZADO NA TELA =feito
// APRIMORAR HISTORICO = feito



let doc = ''
let history = []
let semVirgula = []

function calcular() {


    let v1 = parseFloat(document.getElementById("v1").value)
    let v2 = parseFloat(document.getElementById("v2").value)

    let select = document.getElementById("calculator").value





    if (select === '+') {
        doc = document.getElementById('result').innerHTML = somar(v1, v2)
        history.push(v1 + '+' + v2 + '=' + doc + '<br>')
        semVirgula = (history.join(''));


        let doc1 = document.getElementById('history').innerHTML = semVirgula







    }
    // console.log(eval(v1+select+v2));


    if (select === '-') {
        doc = document.getElementById('result').innerHTML = subtracao(v1, v2)
        history.push(v1 + '-' + v2 + '=' + doc + '<br>')
        semVirgula = (history.join(''));
        let doc1 = document.getElementById('history').innerHTML = semVirgula



    }


    if (select === '/') {
        doc = document.getElementById('result').innerHTML = divisao(v1, v2)
        history.push(v1 + '/' + v2 + '=' + doc + '<br>')
        semVirgula = (history.join(''));


        let doc1 = document.getElementById('history').innerHTML = semVirgula


    }


    if (select === '*') {
        doc = document.getElementById('result').innerHTML = multiplicar(v1, v2)
        history.push(v1 + 'x' + v2 + '=' + doc + '<br>')
        semVirgula = (history.join(''));

        let doc1 = document.getElementById('history').innerHTML = semVirgula

    }


    let limp = (document.getElementById("v1").value) = ''
    let limp2 = (document.getElementById("v2").value) = ''


}




function somar(v1, v2) {
    return v1 + v2



}

function multiplicar(v1, v2) {
    return v1 * v2



}

function divisao(v1, v2) {
    return v1 / v2



}
function subtracao(v1, v2) {
    return v1 - v2



}

// function history(doc) {
//     let history = []

//     history.push(doc)
//     let doc1 = document.getElementById('history').innerHTML = history 


// }

