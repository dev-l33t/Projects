function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleDone(this)">${taskText}</span>
    <button onclick="deleteTask(this)">X</button>
  `;
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

function toggleDone(span) {
  span.parentElement.classList.toggle('done');
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
