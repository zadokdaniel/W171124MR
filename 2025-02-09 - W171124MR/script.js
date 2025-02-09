const board = new Array(9).fill(null);

function getBoard() {
  return board;
}

function turnOf() {
  let x = 0;
  let o = 0;

  for (const tile of board) {
    if (tile === "x") {
      x++;
    }
    if (tile === "o") {
      o++;
    }
  }

  if (x + o === 9) {
    return null;
  }

  if (x > o) {
    return "o";
  }

  if (x < o) {
    return "x";
  }
}
