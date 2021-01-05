const tabuleiro = document.getElementById("board");

for (let i = 1; i <= 7; i++) {
  const columns = document.createElement("div");
  columns.id = `col${i}`;
  columns.classList.add("columns");

  tabuleiro.appendChild(columns);
}

document.body.appendChild(tabuleiro);

const onClick = (ev) => {
  let coluna = document.getElementById(ev.target.id);
  console.log(coluna);
};

tabuleiro.addEventListener("click", onClick);
