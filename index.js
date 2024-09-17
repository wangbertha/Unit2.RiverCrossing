// === State ===
const state = {
  start: ["sheep"],
  target: [],
};

/** Moves a sheep from start to target */
function moveSheep() {
  state.start = [...state.start.slice(0, state.start.length-1)];
  state.target = [...state.target, "sheep"];
  render();
}

// === Render ===

/** Renders sheep on the starting bank */
function renderStartSheep() {
  const startingSheep = state.start.map((sheep) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = "🐑";
    li.append(button);

    // TODO: Add event listener so the sheep moves when clicked
    button.addEventListener('click', moveSheep);
    return li;
  });

  const startingBank = document.querySelector("#startingBank ul");
  startingBank.replaceChildren(...startingSheep);
}

/** Renders sheep on the target bank */
function renderTargetSheep() {
  // TODO
  const targetSheep = state.target.map((sheep) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = "🐑";
    li.append(button);

    return li;
  });

  const targetBank = document.querySelector("#targetBank ul");
  targetBank.replaceChildren(...targetSheep);
}

function render() {
  renderStartSheep();
  renderTargetSheep();
}

// === Script ===
// Initial render
render();

// TODO: Add sheep to the starting bank when the form is submitted
function setUpForm() {
  const $form = document.querySelector('form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();

    const $numSheep = document.querySelector('#numSheep');
    addSheep($numSheep.value)
  });
}

setUpForm();

function addSheep(num) {
  for (let i=0; i<num; i++) {
    state.start.push("sheep");
  }
  renderStartSheep();
}