let body = document.getElementById("body");
const gameContent = document.getElementById("gameContent");
// const gameContent1 = document.getElementById("gameContent1");
let disco = document.createElement("div");
disco.classList.add("disco");

let tabuleiro = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
//teste do Davis

//let luigi =

function exibeTabuleiro() {
  for (let i = 0; i < tabuleiro.length; i++) {
    let coluna = document.createElement("div");
    coluna.classList.add("coluna");
    coluna.id = "coluna" + `${i}`;
    gameContent.appendChild(coluna);

    for (let j = 0; j < tabuleiro[i].length; j++) {
      let celula = document.createElement("div");
      celula.classList.add("celula");

      if (i === 0) {
        celula.id = `${j}`;
      } else {
        celula.id = `${i}` + `${j}`;
      }
      coluna.appendChild(celula);
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

function isEven(numero) {
  if (numero % 2 === 0) {
    return true;
  }
  return false;
}

// const onClick = (ev) => {
//   let celula = document.getElementById(ev.target.id);
//   let coluna = celula.parentElement;
//   console.log(coluna);

//   //Criando e adicionando disco

//   let disco = document.createElement("div");
//   let corDoDisco = "black";
//   disco.classList.add("disco");

//   coluna.children[contador1].appendChild(disco);

//   console.log(coluna.children);

//   contador1++;
//   contadorGeral++;

//   if (isEven(contadorGeral)) {
//     disco.style.backgroundColor = "red";
//     corDoDisco = "black";
//   } else {
//     disco.style.backgroundColor = "black";
//     corDoDisco = "red";
//   }
//   contador1 = 0;
// };

// gameContent.addEventListener("click", onClick);

  let luigi = document.createElement("img");
  luigi.id = "luigi"
  luigi.src = "img/luigi2.png"


  let mario = document.createElement("img");
  mario.id = "mario"
  mario.src = "img/Mario.png"

//func????o de clique na primeira coluna
function colocarClicks() {
  const coluna0 = (document.getElementById(
    "coluna0"
  ).onclick = function click() {
    let celula = document.getElementById(contador1);
    let disco = document.createElement("div");
    let corDoDisco = "red";
    disco.classList.add("disco");
    celula.appendChild(disco);

    contadorGeral++;
    

    if (isEven(contadorGeral)) {
      disco.style.backgroundColor = "red";
      corDoDisco = "black";
    } else {
      disco.style.backgroundColor = "black";
      corDoDisco = "red";
    }
    tabuleiro[0][contador1] = disco.style.backgroundColor;

    contador1++;

    checaVitoria();
  });
  //func????o de clique na segunda coluna
  const coluna1 = (document.getElementById(
    "coluna1"
  ).onclick = function click() {
    let celula = document.getElementById(contador2);
    let disco = document.createElement("div");
    disco.classList.add("disco");
    celula.appendChild(disco);

    contadorGeral++;

    if (isEven(contadorGeral)) {
      disco.style.backgroundColor = "red";
      corDoDisco = "black";
    } else {
      disco.style.backgroundColor = "black";
      corDoDisco = "red";
    }
    tabuleiro[1][Math.floor(contador2 % 10)] = disco.style.backgroundColor;

    contador2++;

    checaVitoria();
  });
  //func????o de clique na terceira coluna
  const coluna2 = (document.getElementById(
    "coluna2"
  ).onclick = function click() {
    let celula = document.getElementById(contador3);
    let disco = document.createElement("div");
    disco.classList.add("disco");
    celula.appendChild(disco);

    contadorGeral++;

    if (isEven(contadorGeral)) {
      disco.style.backgroundColor = "red";
      corDoDisco = "black";
    } else {
      disco.style.backgroundColor = "black";
      corDoDisco = "red";
    }
    tabuleiro[2][Math.floor(contador3 % 10)] = disco.style.backgroundColor;
    contador3++;

    checaVitoria();
  });
  //func????o de clique na quarta coluna
  const coluna3 = (document.getElementById(
    "coluna3"
  ).onclick = function click() {
    let celula = document.getElementById(contador4);
    let disco = document.createElement("div");
    disco.classList.add("disco");
    celula.appendChild(disco);

    contadorGeral++;

    if (isEven(contadorGeral)) {
      disco.style.backgroundColor = "red";
      corDoDisco = "black";
    } else {
      disco.style.backgroundColor = "black";
      corDoDisco = "red";
    }
    tabuleiro[3][Math.floor(contador4 % 10)] = disco.style.backgroundColor;
    contador4++;

    checaVitoria();
  });
  //func????o de clique na quinta coluna
  const coluna4 = (document.getElementById(
    "coluna4"
  ).onclick = function click() {
    let celula = document.getElementById(contador5);
    let disco = document.createElement("div");
    disco.classList.add("disco");
    celula.appendChild(disco);

    contadorGeral++;

    if (isEven(contadorGeral)) {
      disco.style.backgroundColor = "red";
      corDoDisco = "black";
    } else {
      disco.style.backgroundColor = "black";
      corDoDisco = "red";
    }
    tabuleiro[4][Math.floor(contador5 % 10)] = disco.style.backgroundColor;
    contador5++;

    checaVitoria();
  });
  //func????o de clique na sexta coluna
  const coluna5 = (document.getElementById(
    "coluna5"
  ).onclick = function click() {
    let celula = document.getElementById(contador6);
    let disco = document.createElement("div");
    disco.classList.add("disco");
    celula.appendChild(disco);

    contadorGeral++;

    if (isEven(contadorGeral)) {
      disco.style.backgroundColor = "red";
      corDoDisco = "black";
    } else {
      disco.style.backgroundColor = "black";
      corDoDisco = "red";
    }
    tabuleiro[5][Math.floor(contador6 % 10)] = disco.style.backgroundColor;
    contador6++;

    checaVitoria();
  });
  //func????o de clique na setima coluna
  const coluna6 = (document.getElementById(
    "coluna6"
  ).onclick = function click() {
    let celula = document.getElementById(contador7);
    let disco = document.createElement("div");
    disco.classList.add("disco");
    celula.appendChild(disco);

    contadorGeral++;

    if (isEven(contadorGeral)) {
      disco.style.backgroundColor = "red";
      corDoDisco = "black";
    } else {
      disco.style.backgroundColor = "black";
      corDoDisco = "red";
    }
    tabuleiro[6][Math.floor(contador7 % 10)] = disco.style.backgroundColor;
    contador7++;

    checaVitoria();
  });
}
colocarClicks();

let LimX = tabuleiro[0].length - 3;
let LimY = tabuleiro.length - 3;

function checaVitoria() {
  for (let y = 0; y < tabuleiro.length; y++) {
    for (let x = 0; x < LimX; x++) {
      let cell = tabuleiro[y][x];

      if (cell !== 0) {
        if (
          cell === tabuleiro[y][x + 1] &&
          cell === tabuleiro[y][x + 2] &&
          cell === tabuleiro[y][x + 3]
        ) {
          let vitoria = document.createElement("div");
          vitoria.id = "vitoria";
          vitoria.innerHTML = `${cell.toUpperCase()} Venceu na vertical`;
          body.appendChild(vitoria);

          waitReset();
        }
      }
    }
  }

  //checa horizontal
  for (let y = 0; y < LimY; y++) {
    for (let x = 0; x < tabuleiro[0].length; x++) {
      let cell = tabuleiro[y][x];

      if (cell !== 0) {
        if (
          cell === tabuleiro[y + 1][x] &&
          cell === tabuleiro[y + 2][x] &&
          cell === tabuleiro[y + 3][x]
        ) {
          let vitoria = document.createElement("div");
          vitoria.id = "vitoria";
          vitoria.innerHTML = `${cell.toUpperCase()} Venceu na horizontal`;
          body.appendChild(vitoria);

          waitReset();
        }
      }
    }
  }

  //checa transversal ascendente
  for (let y = 0; y < LimY; y++) {
    for (let x = 0; x < LimX; x++) {
      let cell = tabuleiro[y][x];

      if (cell !== 0) {
        if (
          cell === tabuleiro[y + 1][x + 1] &&
          cell === tabuleiro[y + 2][x + 2] &&
          cell === tabuleiro[y + 3][x + 3]
        ) {
          let vitoria = document.createElement('div');
          vitoria.id = "vitoria"
          vitoria.innerHTML = `${cell.toUpperCase()} Venceu na Diagonal`;
          body.appendChild(vitoria)

          waitReset();
          //alert(`${cell}` + " venceu na ASCENDENTE!");
          //return 0;
        }
      }
    }
  }

  //checa transversal descendente
  for (let y = 0; y < LimY; y++) {
    for (let x = 0; x < tabuleiro[0].length; x++) {
      let cell = tabuleiro[y][x];

      if (cell !== 0) {
        if (
          cell === tabuleiro[y + 1][x - 1] &&
          cell === tabuleiro[y + 2][x - 2] &&
          cell === tabuleiro[y + 3][x - 3]
        ) {
          let vitoria = document.createElement('div');
          vitoria.id = "vitoria"
          vitoria.innerHTML = `${cell.toUpperCase()} Venceu na Diagonal`;
          // let newELement = document.getElementById("vitoria");
          body.appendChild(vitoria);

          waitReset();
          //alert(`${cell}` + " venceu na ASCENDENTE!");

          //return 0;
        }
      }
    }
  }
    //checa EMPATE
    let count = 0;
    for (let i = 0; i < tabuleiro.length; i++) {
      for (let j = 0; j < tabuleiro[i].length; j++) {
        if (tabuleiro[i][j] !== 0) {
          count++;
        }
      }
    }
    if (count === 42) {
      let vitoria = document.createElement("div");
      vitoria.id = "vitoria";
      vitoria.innerHTML = "EMPATE";
      body.appendChild(vitoria);
    }
}


// Fun????o de resetar o jogo

function resetar() {
  let gameContent = document.getElementById("gameContent");
  gameContent.innerHTML = " ";

  tabuleiro = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];

  contador1 = 0;
  contador2 = 10;
  contador3 = 20;
  contador4 = 30;
  contador5 = 40;
  contador6 = 50;
  contador7 = 60;
  contadorGeral = 0;
  exibeTabuleiro();
  colocarClicks();
  let vitoria = document.getElementById("vitoria");

  vitoria.remove();

  return 1;
}

function waitReset() {
  for (let i = 0; i < tabuleiro.length; i++) {
    document.getElementById("coluna" + `${i}`).onclick = 0;
  }
}

let reset = document.getElementById("restart");
reset.addEventListener("click", resetar);
