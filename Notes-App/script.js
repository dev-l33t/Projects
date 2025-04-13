function addNote() {
  const input = document.getElementById("noteInput");
  const notes = getNotes();
  if (input.value.trim() !== "") {
    notes.push(input.value.trim());
    saveNotes(notes);
    input.value = "";
    displayNotes();
  }
}

function getNotes() {
  return JSON.parse(localStorage.getItem("notes") || "[]");
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  displayNotes();
}

function displayNotes() {
  const notesList = document.getElementById("notesList");
  const notes = getNotes();
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">X</button>
    `;
    notesList.appendChild(div);
  });
}

window.onload = displayNotes;
