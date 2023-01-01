const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0,
    toggled = false;

const toggle = () => {
  toggled = !toggled;
  
  document.body.classList.toggle("toggled");
}

const handleOnClick = index => {
  toggle();

}

const createTile = index => {
  const tile = document.createElement("div");
  
  tile.classList.add("tile");
  
  tile.style.opacity = toggled ? 1 : 1;
  
  tile.onclick = e => handleOnClick();
  
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
}

const createGrid = () => {
  wrapper.innerHTML = "";
  
  const size = document.body.clientWidth > 800 ? 60 : 40;
  
  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.body.clientHeight / size);
  
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  
  createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();