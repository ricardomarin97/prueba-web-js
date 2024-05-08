window.addEventListener("contextmenu", function createMenu(e) {
  e.stopPropagation();
  e.preventDefault();

  let contMenu = document.createElement("div");
  contMenu.className = "context-menu";
  contMenu.textContent = "Dummy context";

  document.body.appendChild(contMenu);

  let contMenuWidth = contMenu.offsetWidth;
  let contMenuHeight = contMenu.offsetHeight;

  contMenu.style.left =
    e.clientX < innerWidth - contMenuWidth
      ? `${e.clientX}px`
      : `${innerWidth - contMenuWidth}px`;

  contMenu.style.top =
    e.clientY < innerHeight - contMenuHeight
      ? `${e.clientY}px`
      : `${innerHeight - contMenuHeight}px`;
});

window.addEventListener("mousedown", function () {
  let contMenu = document.querySelector(".context-menu");

  if (contMenu !== null) {
    document.body.removeChild(contMenu);
  }
});
