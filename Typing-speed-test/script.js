const textDisplay = document.getElementById("textDisplay");
const inputBox = document.getElementById("inputBox");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

let sampleText = "Practice makes perfect. Keep typing to improve your speed and accuracy.";
let startTime, timerInterval;

function startTest() {
  inputBox.disabled = false;
  inputBox.value = "";
  inputBox.focus();
  textDisplay.textContent = sampleText;
  startTime = new Date();
  timerDisplay.textContent = "0";
  wpmDisplay.textContent = "0";
  accuracyDisplay.textContent = "0%";
  timerInterval = setInterval(updateTime, 1000);
}

function updateTime() {
  const currentTime = Math.floor((new Date() - startTime) / 1000);
  timerDisplay.textContent = currentTime;
}

function checkTyping() {
  const typedText = inputBox.value;
  const originalText = sampleText;

  if (typedText === originalText) {
    clearInterval(timerInterval);
    const totalTime = Math.floor((new Date() - startTime) / 1000);
    const wordCount = originalText.split(" ").length;
    const wpm = Math.round((wordCount / totalTime) * 60);
    const correctChars = typedText.split("").filter((ch, i) => ch === originalText[i]).length;
    const accuracy = Math.round((correctChars / originalText.length) * 100);

    wpmDisplay.textContent = wpm;
    accuracyDisplay.textContent = accuracy + "%";
    inputBox.disabled = true;
  }
}
