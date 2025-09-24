
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="remove-btn">Remove</button>
  `;

  li.querySelector("span").addEventListener("click", function () {
    li.classList.toggle("completed");
  });


  li.querySelector(".remove-btn").addEventListener("click", function () {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
  taskInput.focus();
});

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTaskBtn.click();
});
