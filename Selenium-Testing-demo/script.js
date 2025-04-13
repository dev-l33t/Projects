// Show Delayed Button
document.getElementById('showBtn')?.addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('delayedBtn').classList.remove('hidden');
  }, 3000);
});

// Drag and Drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// Modal Toggle
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
