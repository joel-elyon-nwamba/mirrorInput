const inputText = document.getElementById("inputText");
const mirrorText = document.getElementById("mirrorText");

inputText.addEventListener("input", () => {
    mirrorText.textContent = inputText.value; 

})