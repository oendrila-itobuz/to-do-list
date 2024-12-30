const newTask = document.getElementById("new-task-input");
const addTask = document.getElementById("add-task-button");
const tasks = document.getElementById("tasks");
const allTask = document.getElementById("all-task");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
const clearCompleted = document.getElementById("clear-completed");

function add() {
  const newElement = document.createElement("div");
  const images = document.createElement("div");
  const delete_image = document.createElement("img");
  const tick_image = document.createElement("img");
  newElement.setAttribute("class", "task");
  newElement.setAttribute("data-status", "active");
  tick_image.setAttribute("id", "tick-image");
  tick_image.onclick = done;
  tick_image.src = "./images/tick.png";
  delete_image.setAttribute("id", "delete-image");
  delete_image.src = "./images/delete.png";
  delete_image.onclick = deleteTask;
  newElement.textContent = newTask.value;
  images.appendChild(tick_image);
  images.appendChild(delete_image);
  newElement.appendChild(images);
  tasks.appendChild(newElement);
  newTask.value = "";
}

function deleteTask(event) {
  const taskElement = event.target.closest("div").parentNode;
  tasks.removeChild(taskElement);
}

function done(event) {
  const taskElement = event.target.closest("div").parentNode;
  taskElement.style.textDecorationLine = "line-through";
  taskElement.setAttribute("data-status", "done");
}

function showAllTasks() {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    task.style.display = "flex";
  });
}

function showActiveTasks() {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    task.style.display = task.dataset.status === "active" ? "flex" : "none";
  });
}

function showCompletedTasks() {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    task.style.display = task.dataset.status === "done" ? "flex" : "none";
  });
}

function clearCompletedTasks() {
  const allTasks = document.querySelectorAll(".task");
  allTasks.forEach((task) => {
    if (task.dataset.status === "done") {
      tasks.removeChild(task);
    }
  });
}

addTask.addEventListener("click", add);
allTask.addEventListener("click", showAllTasks);
active.addEventListener("click", showActiveTasks);
completed.addEventListener("click", showCompletedTasks);
clearCompleted.addEventListener("click", clearCompletedTasks);
