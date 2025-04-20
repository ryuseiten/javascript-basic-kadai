const outputText = document.getElementById("text");
const outputBtn = document.getElementById("btn");

outputBtn.addEventListener("click", ()=>{
    outputText.textContent = "ボタンをクリックしました";
});