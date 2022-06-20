// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let adultos_input = document.getElementById("adultos_input")
let crianças_input = document.getElementById("crianças_input")
let duraçao_input = document.getElementById("duraçao_input")

let resultado = document.getElementById("resultado_list")

function calcular(){
    let adultos = adultos_input.value;
    let crianças = crianças_input.value;
    let duraçao = duraçao_input.value;

    let qdtTotalCarne = carnePP(duraçao) * adultos + (carnePP(duraçao) / 2 * crianças)
    let qdtTotalCerveja = cervejaPP(duraçao) * adultos 
    let qdtTotalBebidas = bebidasPP(duraçao) * adultos + (bebidasPP(duraçao) / 2 * crianças)
    
    //coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mais de um innerHTML
    resultado.innerHTML = `<p>${qdtTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/ 2000)} Garrafas de Bebidas</p>`
}


function carnePP(duraçao_input){
    if (duraçao_input >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function cervejaPP(duraçao_input){
    if (duraçao_input >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidasPP(duraçao_input){
    if (duraçao_input >=6){
        return 1500;
    }
    else{
        return 1000;
    }
}