function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

function boxesCreate(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement(`div`);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxContainer.innerHTML = "";
  boxContainer.appendChild(fragment);
}

function boxesDestroy() {
  boxContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    return;
  }
  boxesCreate(amount);
  input.value = "";
});
destroyButton.addEventListener("click", boxesDestroy);
