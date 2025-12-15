// ========== helpers ==========
function createBoardElement() {
  const board = document.createElement("div");
  board.classList.add("board");
  return board;
}

function getCellColorClass(row, col) {
  // אם הסכום זוגי -> תא בהיר, אם אי-זוגי -> כהה
  return (row + col) % 2 === 0 ? "light" : "dark";
}

function createCell(row, col) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  // צבע (light/dark)
  cell.classList.add(getCellColorClass(row, col));

  // נשמור "כתובת" של התא כדי שנוכל להשתמש בזה בהמשך למשחק
  cell.dataset.row = row;
  cell.dataset.col = col;

  return cell;
}

// ========== main ==========
const app = document.querySelector("#app");

const board = createBoardElement();

// יוצרים 8 שורות, ובכל שורה 8 עמודות = 64 תאים
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const cell = createCell(row, col);
    board.appendChild(cell);
  }
}

app.appendChild(board);
