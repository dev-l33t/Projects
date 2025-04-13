const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing is a useful skill to learn and improve.",
  "Speed and accuracy are both important in typing.",
  "Practice makes perfect when it comes to typing fast."
];

let startTime;
let timerInterval;

function startTest() {
  const sentence = sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById("sentence").textContent = sentence;
  document.getElementById("inputArea").value = "";
  document.getElementById("inputArea").focus();
  document.getElementById("wpm").textContent = "0";
  document.getElementById("timer").textContent = "0";

  clearInterval(timerInterval);
  startTime = new Date().getTime();
  timerInterval = setInterval(updateTimer, 1000);

  document.getElementById("inputArea").addEventListener("input", checkTyping);
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsed = Math.floor((currentTime - startTime) / 1000);
  document.getElementById("timer").textContent = elapsed;
}

function checkTyping() {
  const typed = document.getElementById("inputArea").value.trim();
  const target = document.getElementById("sentence").textContent.trim();

  if (typed === target) {
    clearInterval(timerInterval);
    const elapsed = parseInt(document.getElementById("timer").textContent);
    const wordCount = target.split(" ").length;
    const wpm = Math.round((wordCount / elapsed) * 60);
    document.getElementById("wpm").textContent = wpm;
  }
}
