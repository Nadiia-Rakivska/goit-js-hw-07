const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (ev) => {
  const output = ev.currentTarget.value.trim();
    outputText.textContent = output|| "Anonymous";
}
)