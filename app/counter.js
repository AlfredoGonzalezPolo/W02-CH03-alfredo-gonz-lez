const counterValue = document.querySelector(".output");
let value = 0;

const handleIncrementButton = () => {
  value = Number(counterValue.textContent) + 1;
  if (value >= 20) {
    alert("Sorry, we can't count more :(");
    value = 20;
  }

  counterValue.textContent = value;
};

export const handleDecrementButton = () => {
  value = Number(counterValue.textContent) - 1;
  if (value < 0) {
    value = 0;
  }

  counterValue.textContent = value;
};

const handleResetButton = () => {
  value = Number(counterValue.textContent) - value;
  counterValue.textContent = value;
};

const registerEventListeners = () => {
  const incrementButton = document.querySelector(".increment-button");
  incrementButton.addEventListener("click", () => {
    handleIncrementButton();
  });

  const decrementButton = document.querySelector(".decrement-button");
  decrementButton.addEventListener("click", () => {
    handleDecrementButton();
  });

  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", () => {
    handleResetButton();
  });
};

const playCounter = () => {
  registerEventListeners();
};

playCounter();
