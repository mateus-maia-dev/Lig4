const gameContent = document.getElementById('gameContent');
const gameContent1 = document.getElementById('gameContent1');
let disco = document.createElement('div');
disco.classList.add('disco');

let tabuleiro = [
    "000000",
    "000000",
    "000000",
    "000000",
    "000000",
    "000000",
    "000000"
];

function exibeTabuleiro() {
    for (let i = 0; i < tabuleiro.length; i++) {
        let coluna = document.createElement('div');
        coluna.classList.add('coluna');
        coluna.id = ('coluna' + `${i}`)
        gameContent.appendChild(coluna);

        for (let j = 0; j < tabuleiro[i].length; j++) {
            let celula = document.createElement('div');
            celula.classList.add('celula');
            if (i === 0) {
                celula.id = ('celula' + `${j}`);
                coluna.appendChild(celula);
            } else {
                celula.id = ('celula' + `${i}` + `${j}`);
                coluna.appendChild(celula);
            }
        }
    }
}
exibeTabuleiro();

let contador1 = 0;
let contador2 = 10;
let contador3 = 20;
let contador4 = 30;
let contador5 = 40;
let contador6 = 50;
let contador7 = 60;
contadorGeral = 0;

function isEven(numero){
    if(numero % 2 === 0){
        return true;
    }
    return false;
}
//funcção de clique na primeira coluna
document.getElementById('coluna0').onclick = function click() {
    console.log('clicou na 1');
    let celula = document.getElementById('celula'+`${contador1}`);
    let disco = document.createElement('div');
    let corDoDisco = "black";
    disco.classList.add('disco');
    celula.appendChild(disco);
    contador1++
    contadorGeral++;

    if (isEven(contadorGeral)){
        disco.style.backgroundColor = 'red'
        corDoDisco = "black"
     }else{
        disco.style.backgroundColor = 'black';
        corDoDisco = "red"
    }
    
    
};
//funcção de clique na segunda coluna
document.getElementById('coluna1').onclick = function click() {
    console.log('clicou na 2');
    let celula = document.getElementById('celula' + contador2);
    let disco = document.createElement('div');
    disco.classList.add('disco');
    celula.appendChild(disco);
    contador2++
    contadorGeral++;

    if (isEven(contadorGeral)){
        disco.style.backgroundColor = 'red'
        corDoDisco = "black"
     }else{
        disco.style.backgroundColor = 'black';
        corDoDisco = "red"
    }
};
//funcção de clique na terceira coluna
document.getElementById('coluna2').onclick = function click() {
    console.log('clicou na 3');
    let celula = document.getElementById('celula' + contador3);
    let disco = document.createElement('div');
    disco.classList.add('disco');
    celula.appendChild(disco);
    contador3++
    contadorGeral++;

    if (isEven(contadorGeral)){
        disco.style.backgroundColor = 'red'
        corDoDisco = "black"
     }else{
        disco.style.backgroundColor = 'black';
        corDoDisco = "red"
    }
    
};
//funcção de clique na quarta coluna
document.getElementById('coluna3').onclick = function click() {
    console.log('clicou na 4');
    let celula = document.getElementById('celula' + contador4);
    let disco = document.createElement('div');
    disco.classList.add('disco');
    celula.appendChild(disco);
    contador4++
    contadorGeral++;

    if (isEven(contadorGeral)){
        disco.style.backgroundColor = 'red'
        corDoDisco = "black"
     }else{
        disco.style.backgroundColor = 'black';
        corDoDisco = "red"
    }
    
};
//funcção de clique na quinta coluna
document.getElementById('coluna4').onclick = function click() {
    console.log('clicou na 5');
    let celula = document.getElementById('celula' + contador5);
    let disco = document.createElement('div');
    disco.classList.add('disco');
    celula.appendChild(disco);
    contador5++
    contadorGeral++;

    if (isEven(contadorGeral)){
        disco.style.backgroundColor = 'red'
        corDoDisco = "black"
     }else{
        disco.style.backgroundColor = 'black';
        corDoDisco = "red"
    }
    
};
//funcção de clique na sexta coluna
document.getElementById('coluna5').onclick = function click() {
    console.log('clicou na 6');
    let celula = document.getElementById('celula' + contador6);
    let disco = document.createElement('div');
    disco.classList.add('disco');
    celula.appendChild(disco);
    contador6++
    contadorGeral++;

    if (isEven(contadorGeral)){
        disco.style.backgroundColor = 'red'
        corDoDisco = "black"
     }else{
        disco.style.backgroundColor = 'black';
        corDoDisco = "red"
    }
    
};
//funcção de clique na setima coluna
document.getElementById('coluna6').onclick = function click() {
    console.log('clicou na 7');
    let celula = document.getElementById('celula' + contador7);
    let disco = document.createElement('div');
    disco.classList.add('disco');
    celula.appendChild(disco);
    contador7++
    contadorGeral++;

    if (isEven(contadorGeral)){
        disco.style.backgroundColor = 'red'
        corDoDisco = "black"
     }else{
        disco.style.backgroundColor = 'black';
        corDoDisco = "red"
    }
};


